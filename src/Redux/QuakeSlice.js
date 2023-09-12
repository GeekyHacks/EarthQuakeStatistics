import { createSlice, createAsyncThunk } from '@reduxjs/toolkit/dist/createSlice';



const initialState = {
  quakeID: '',
  quakeCorrds,
};

const QuakeSlice = createSlice({
  name: 'quakes',
  initialState: [],
});
