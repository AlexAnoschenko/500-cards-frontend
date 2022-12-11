import { createBrowserRouter } from 'react-router-dom';
import { ErrorRoutePage } from 'pages/ErrorRoutePage/ErrorRoutePage';
import { StartPage } from 'pages/StartPage/StartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    errorElement: <ErrorRoutePage />,
  },
]);
