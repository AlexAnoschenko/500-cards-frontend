import { createBrowserRouter } from 'react-router-dom';
import { ErrorRoutePage } from './Pages/ErrorRoutePage/ErrorRoutePage';
import { RootPage } from './Pages/RootPage/RootPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorRoutePage />,
  },
]);
