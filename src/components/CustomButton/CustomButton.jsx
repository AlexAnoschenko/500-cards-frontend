import Button from '@mui/material/Button';

const createStyles = (customVariant) => {
  switch (customVariant) {
    default:
      return { width: '300px', backgroundColor: 'black', borderRadius: '20px' };
  }
};

export const CustomButton = ({
  label = 'label',
  customVariant,
  onClickHandler = () => {},
}) => {
  const styles = createStyles(customVariant);

  return (
    <Button
      variant='contained'
      size='large'
      sx={styles}
      onClick={onClickHandler}
    >
      {label}
    </Button>
  );
};
