import { configureStore } from '@reduxjs/toolkit';
import earthquakeReducer, { FetchQuakeMag } from './QuakeSlice';

const store = configureStore({
  reducer: {
    earthquake: earthquakeReducer,
  },
});

store.dispatch(FetchQuakeMag());
export default store;
