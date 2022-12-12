import { useDispatch } from 'react-redux';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { openModalAction } from 'store/actions/modalActions';

import './StartPage.css';

export const StartPage = () => {
  const dispatch = useDispatch();

  return (
    <div className='start-page__buttons-block'>
      <CustomButton
        label='Create Game'
        onClickHandler={() =>
          dispatch(openModalAction({ isOpen: true, type: 'create_game' }))
        }
      />
      <CustomButton
        label='Join Room'
        onClickHandler={() =>
          dispatch(openModalAction({ isOpen: true, type: 'join_room' }))
        }
      />
    </div>
  );
};
