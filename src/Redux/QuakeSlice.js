import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

const initialState = {
  earthquakes: [],
  isLoading: false,
  error: null,
  minMagnitude: 4,
  maxMagnitude: 5,
};

export const FetchQuakeMag = createAsyncThunk('earthquake/FetchQuakeMag', async (_, { getState }) => {
  const { earthquake } = getState();
  const { minMagnitude, maxMagnitude } = earthquake;

  const response = await fetch(apiUrl);
  const data = await response.json();

  const filteredQuakes = data.features.filter(
    (quake) => quake.properties.mag >= minMagnitude && quake.properties.mag <= maxMagnitude
  );
  console.log(filteredQuakes);
  return filteredQuakes;
});

// export const FetchQuakeCoords = createAsyncThunk('earthquake/FetchQuakeCoords', async (_, { dispatch }) => {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     const coordinates = data.features.map((quake) => {
//       const { geometry } = quake;
//       console.log(geometry.coordinates);
//       return geometry.coordinates;
//     });
//     console.log(coordinates);
//     dispatch(setCoordinates(coordinates));
//   } catch (error) {
//     throw error;
//   }
// });

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
      });
    // .addCase(FetchQuakeCoords.pending, (state) => {
    //   state.isLoading = 'loading';
    // })
    // .addCase(FetchQuakeCoords.fulfilled, (state, action) => {
    //   state.isLoading = 'succeeded';
    //   state.coordinates = action.payload;
    // })
    // .addCase(FetchQuakeCoords.rejected, (state, action) => {
    //   state.isLoading = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export const { setMinMagnitude, setMaxMagnitude } = earthquakeSlice.actions;

export default earthquakeSlice.reducer;
