import * as S from './Nav.style';

const ToggleButton = ({ isClicked, clickToggleHandler }) => {
  return (
    <S.ToggleButtonContainer onClick={clickToggleHandler} isClicked={isClicked}>
      <S.CircleContainer isClicked={isClicked} />
    </S.ToggleButtonContainer>
  );
};

export default ToggleButton;
