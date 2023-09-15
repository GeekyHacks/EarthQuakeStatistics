// MainPage.test.js

import React from 'react';
import App from '../../App';

test('MyComponent matches snapshot', () => {
  const { asFragment } = render(<App />);
  // Capture the rendered component as a snapshot
  expect(asFragment()).toMatchSnapshot();
});
