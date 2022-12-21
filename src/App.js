import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Main from './Main';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/404',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Route />
    </RouterProvider>
  );
}

export default App;




