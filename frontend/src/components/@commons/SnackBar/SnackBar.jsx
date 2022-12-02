import * as S from './SnackBar.style';

const SnackBar = ({ isActive, message }) => {
  // snackbar의 fixed 위치가 scroll 대응을 못함
  return (
    <S.SnackBar isActive={isActive}>
      <div>{message}</div>
    </S.SnackBar>
  );
};

export default SnackBar;
