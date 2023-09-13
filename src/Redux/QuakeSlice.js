// earthquakeSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import geolib from 'geolib'; // Import the geolib library

const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

const initialState = {
  earthquakes: [],
  isLoading: false,
  error: null,
  minMagnitude: 4,
  maxMagnitude: 5,
  coordinates: [],
  earthquakesByContinent: [], // New state to store earthquakes by continent
};

export const FetchQuakeMag = createAsyncThunk('earthquake/FetchQuakeMag', async (_, { getState }) => {
  try {
    const { earthquake } = getState();
    const { minMagnitude, maxMagnitude } = earthquake;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Filter earthquakes by magnitude between minMagnitude and maxMagnitude
    const filteredQuakes = data.features.filter(
      (quake) => quake.properties.mag >= minMagnitude && quake.properties.mag <= maxMagnitude
    );

    return filteredQuakes;
  } catch (error) {
    throw error;
  }
});

export const FetchQuakeCoords = createAsyncThunk('earthquake/FetchQuakeCoords', async (_, { getState, dispatch }) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Extract coordinates from earthquake data
    const coordinates = data.features.map((quake) => {
      const { geometry } = quake;
      return geometry.coordinates;
    });

    // Dispatch the coordinates to the store
    dispatch(setCoordinates(coordinates));
  } catch (error) {
    throw error;
  }
});

export const FetchQuakeByContinent = createAsyncThunk(
  'earthquake/FetchQuakeByContinent',
  async (continent, { getState }) => {
    try {
      const { earthquake } = getState();
      const { coordinates } = earthquake;

      // Replace these coordinates with the center of the continent you want to filter
      const continentCenter = { latitude: 0, longitude: 0 };

      // Adjust the radius as needed (in meters)
      const radius = 500000;

      // Filter earthquakes by continent using the geolib library
      const earthquakesByContinent = coordinates.filter((coord) => {
        return geolib.isPointInCircle(coord, continentCenter, radius);
      });

      return earthquakesByContinent;
    } catch (error) {
      throw error;
    }
  }
);

const earthquakeSlice = createSlice({
  name: 'earthquake',
  initialState: initialState,
  reducers: {
    setMinMagnitude: (state, action) => {
      state.minMagnitude = action.payload;
    },
    setMaxMagnitude: (state, action) => {
      state.maxMagnitude = action.payload;
    },
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
    setEarthquakesByContinent: (state, action) => {
      state.earthquakesByContinent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchQuakeMag.pending, (state) => {
        state.isLoading = 'loading';
      })
      .addCase(FetchQuakeMag.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.earthquakes = action.payload;
      })
      .addCase(FetchQuakeMag.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      })
      .addCase(FetchQuakeCoords.pending, (state) => {
        state.isLoading = 'loading';
      })
      .addCase(FetchQuakeCoords.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.coordinates = action.payload;
      })
      .addCase(FetchQuakeCoords.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      })
      .addCase(FetchQuakeByContinent.pending, (state) => {
        state.isLoading = 'loading';
      })
      .addCase(FetchQuakeByContinent.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.earthquakesByContinent = action.payload;
      })
      .addCase(FetchQuakeByContinent.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setMinMagnitude, setMaxMagnitude } = earthquakeSlice.actions;

export default earthquakeSlice.reducer;
