import * as S from './SnackBar.style';

const SnackBar = ({ isActive, message }) => {
  return (
    <S.SnackBar>
      {isActive ? (
        <S.FadeIn> {message}</S.FadeIn>
      ) : (
        <S.FadeOut> {message}</S.FadeOut>
      )}
    </S.SnackBar>
  );
};

export default SnackBar;
