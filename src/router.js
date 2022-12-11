import { createBrowserRouter } from 'react-router-dom';
import { ErrorRoutePage } from './pages/ErrorRoutePage/ErrorRoutePage';
import { RootPage } from './pages/RootPage/RootPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorRoutePage />,
  },
]);
