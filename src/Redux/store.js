// store.js

import { configureStore } from '@reduxjs/toolkit';
import earthquakeReducer, { FetchQuakeMag } from './QuakeSlice';

const store = configureStore({
  reducer: {
    earthquake: earthquakeReducer,
  },
});

store.dispatch(FetchQuakeMag()); // Dispatch the fetchEarthquakes action to fetch data when the store is initialized

export default store;
