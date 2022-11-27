import * as S from './Nav.style';
import ToggleButton from './ToggleButton';

const NavigationBar = ({ isClicked, clickToggleHandler }) => {
  return (
    <S.NavigationBarWrapper>
      <S.NavigationBarContainer>
        <div>배터리</div>
        <ToggleButton
          isClicked={isClicked}
          clickToggleHandler={clickToggleHandler}
        />
        <div>주유소</div>
      </S.NavigationBarContainer>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
