// MainPage.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import redux-mock-store
import MainPage from '../MainPage';
// creates the mock store
const mockStore = configureStore();

const initialState = {
  earthquakes: [],
  isLoading: false,
  error: null,
  minMagnitude: 4,
  maxMagnitude: 5,
};

const store = mockStore(initialState);

describe('MainPage', () => {
  it('renders without errors', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    // Add your assertions here
  });
});
