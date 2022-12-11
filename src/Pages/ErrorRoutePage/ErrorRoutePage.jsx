import { useRouteError } from 'react-router-dom';

export const ErrorRoutePage = () => {
  const { status, statusText, message, error } = useRouteError();

  return (
    <div>
      <h1>Error code: {status}</h1>
      <p>{error.message}</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
};
