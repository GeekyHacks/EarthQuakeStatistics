import { createSlice, createAsyncThunk } from '@reduxjs/toolkit/dist/createSlice';

const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
const initialState = {
  Quakes: [],
  IsLoading: false,
};

export const fetchQuakes = createAsyncThunk('quakes/fetchQuakes', async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  const result = [];
  data.forEach((Quake) => {
    result.push({
      name: Quake.Quake_name,
      id: Quake.Quake_id,
    });
  });
  console.log(result);
  return result;
});

const QuakeSlice = createSlice({
  name: 'quakes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuakes.fulfilled, (state, { payload }) => ({
      ...state,
      quakes: payload,
      IsLoading: false,
    }));
    builder.addCase(fetchQuakes.pending, (state) => ({
      ...state,
    }));

    builder.addCase(fetchQuakes.rejected, (state) => ({
      ...state,
      IsLoading: true,
    }));
  },
});
