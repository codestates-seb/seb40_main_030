import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentLocationState, navState } from '../../../recoil/pagesState';
import {
  MapIcon,
  LogoIcon,
  BatteryIcon,
  ClockIcon,
  MyPageIcon,
} from '../../../assets';
import * as S from './BottomNav.style';
import { useCurrentLocation } from '../../Home/KakaoMap/hooks';

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(navState);
  const { location } = useCurrentLocation();
  const setCurrentLocation = useSetRecoilState(currentLocationState);

  return (
    <S.Wrapper>
      <S.IconBox onClick={() => pathname !== '/' && navigate('/')}>
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
  );
};

export default BottomNav;
