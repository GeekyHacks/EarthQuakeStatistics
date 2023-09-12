import { configureStore } from '@reduxjs/toolkit';
import QuakeSlice from './QuakeSlice';

const store = configureStore({
  reducers: {
    quakes: QuakeSlice,
  },
});
