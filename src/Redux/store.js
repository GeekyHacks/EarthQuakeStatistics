// store.js

import { configureStore } from '@reduxjs/toolkit';
import earthquakeReducer, { fetchEarthquakes } from './QuakeSlice';

const store = configureStore({
  reducer: {
    earthquake: earthquakeReducer,
  },
});

store.dispatch(fetchEarthquakes()); // Dispatch the fetchEarthquakes action to fetch data when the store is initialized

export default store;
