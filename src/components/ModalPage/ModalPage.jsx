import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { closeModalAction } from 'store/actions/modalActions';
import { CustomButton } from 'components/CustomButton/CustomButton';

import './ModalPage.css';

const getModalTemplate = (type) => {
  switch (type) {
    case 'create_game':
      return (
        <>
          <p className='modal-page__modal-title'>Create Game</p>
          <TextField id='outlined-basic' label='Your Name' variant='outlined' />
          <TextField
            id='outlined-basic'
            label='Number of Players'
            variant='outlined'
          />
          <CustomButton label='Create Game' />
        </>
      );

    case 'join_room':
      return (
        <>
          <p className='modal-page__modal-title'>Join Room</p>
          <TextField id='outlined-basic' label='Your Name' variant='outlined' />
          <TextField id='outlined-basic' label='Room Code' variant='outlined' />
          <CustomButton label='Join Room' />
        </>
      );

    default:
      break;
  }
};

export const Modal = ({ type }) => {
  const dispatch = useDispatch();

  return createPortal(
    <div
      className='modal-page__root'
      onClick={() => dispatch(closeModalAction({ isOpen: false, type: null }))}
    >
      <div
        className='modal-page__content-block'
        onClick={(event) => event.stopPropagation()}
      >
        {getModalTemplate(type)}
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};
