// // earthquakeSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// const initialState = {
//   earthquakes: [],
//   isLoading: false,
//   error: null,
//   minMagnitude: 4, // Add minMagnitude and maxMagnitude to the initial state
//   maxMagnitude: 5,
// };

// export const FetchQuakeMag = createAsyncThunk('earthquake/FetchQuakeMag', async (_, { getState }) => {
//   try {
//     const { earthquake } = getState();
//     const { minMagnitude, maxMagnitude } = earthquake;

//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     // Filter earthquakes by magnitude between minMagnitude and maxMagnitude
//     const filteredQuakes = data.features.filter(
//       (quake) => quake.properties.mag >= minMagnitude && quake.properties.mag <= maxMagnitude
//     );
//     console.log(filteredQuakes);
//     return filteredQuakes;
//   } catch (error) {
//     throw error;
//   }
// });

// export const FetchQuakeCoords = createAsyncThunk('earthquake/FetchQuakeMag', async (_, { getState }) => {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     // Extract coordinates from earthquake data
//     const coordinates = data.features.map((quake) => {
//       const { geometry } = quake;
//       return geometry.coordinates;
//     });
//     console.log(coordinates);
//   } catch (error) {
//     throw error;
//   }
// });

// const earthquakeSlice = createSlice({
//   name: 'earthquake',
//   initialState: initialState,
//   reducers: {
//     // Add reducers for setting minMagnitude and maxMagnitude
//     setMinMagnitude: (state, action) => {
//       state.minMagnitude = action.payload;
//     },
//     setMaxMagnitude: (state, action) => {
//       state.maxMagnitude = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(FetchQuakeMag.pending, (state) => {
//         state.isLoading = 'loading';
//       })
//       .addCase(FetchQuakeMag.fulfilled, (state, action) => {
//         state.isLoading = 'succeeded';
//         state.earthquakes = action.payload;
//       })
//       .addCase(FetchQuakeMag.rejected, (state, action) => {
//         state.isLoading = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setMinMagnitude, setMaxMagnitude } = earthquakeSlice.actions;

// export default earthquakeSlice.reducer;

// earthquakeSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

const initialState = {
  earthquakes: [],
  isLoading: false,
  error: null,
  minMagnitude: 4, // Add minMagnitude and maxMagnitude to the initial state
  maxMagnitude: 5,
  coordinates: [],
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
    console.log(filteredQuakes);
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
    console.log(coordinates);

    // Dispatch the coordinates to the store
    dispatch(setCoordinates(coordinates)); // Define the 'setCoordinates' action
  } catch (error) {
    throw error;
  }
});

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
      });
  },
});

export const { setMinMagnitude, setMaxMagnitude } = earthquakeSlice.actions;

export default earthquakeSlice.reducer;
