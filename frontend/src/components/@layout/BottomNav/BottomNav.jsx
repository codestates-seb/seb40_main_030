import { useRecoilState } from 'recoil';
import { navState } from '../../../recoil/pagesState';
import {
  MapIcon,
  LogoIcon,
  BatteryIcon,
  ClockIcon,
  MyPageIcon,
} from '../../../assets';
import * as S from './BottomNav.style';

const Nav = () => {
  const [isActive, setIsActive] = useRecoilState(navState);

  return (
    <>
      <S.Wrapper>
        <S.IconBox>
          <MapIcon />
        </S.IconBox>
        <S.IconBox
          className={isActive ? 'active' : null}
          onClick={() => setIsActive(!isActive)}
        >
          <ClockIcon />
        </S.IconBox>
        <S.IconBox>
          <LogoIcon />
        </S.IconBox>
        <S.IconBox>
          <BatteryIcon />
        </S.IconBox>
        <S.IconBox>
          <MyPageIcon />
        </S.IconBox>
      </S.Wrapper>
    </>
  );
};

export default Nav;
