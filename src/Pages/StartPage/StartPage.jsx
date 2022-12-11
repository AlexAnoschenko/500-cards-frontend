import { CustomButton } from 'components/CustomButton/CustomButton';

import './StartPage.css';

export const StartPage = () => {
  return (
    <div className='start-page__buttons-block'>
      <CustomButton label='Create Game' />
      <CustomButton label='Join to Room' />
    </div>
  );
};
