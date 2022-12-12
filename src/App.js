import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from 'components/ModalPage/ModalPage';
import { router } from './router';

import './App.css';

export const App = () => {
  const { isOpen, type } = useSelector((state) => state.modal.modal);

  return (
    <div className='App'>
      <RouterProvider router={router} />
      {isOpen && <Modal type={type} />}
    </div>
  );
};
