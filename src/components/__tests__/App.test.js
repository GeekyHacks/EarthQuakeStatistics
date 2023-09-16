import React from 'react';
import App from '../../App';
import { Route } from 'react-router-dom';

test('App matches snapshot', () => {
  const app = render(
    <Route>
      <App />
    </Route>
  );
  // Capture the rendered component as a snapshot
  expect(app).toMatchSnapshot();
});
