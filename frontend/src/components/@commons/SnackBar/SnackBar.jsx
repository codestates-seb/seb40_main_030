import * as S from './SnackBar.style';

const SnackBar = ({ isActive, message }) => {
  return (
    <S.SnackBar isActive={isActive}>
      <div>{message}</div>
    </S.SnackBar>
  );
};

export default SnackBar;
