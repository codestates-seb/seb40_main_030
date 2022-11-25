import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import {
  MapIcon,
  LogoIcon,
  BatteryIcon,
  ClockIcon,
  MyPageIcon,
} from '@/assets';
import { navState } from '@/recoil/pagesState';

import * as S from './BottomNav.style';

const BottomNav = () => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(navState);

  // 임시
  const memberId = 3;

  return (
    <S.Wrapper>
      <Link to={pathname !== '/' && '/'}>
        <S.IconBox>
          <MapIcon />
        </S.IconBox>
      </Link>
      <S.IconBox
        className={isActive ? 'active' : null}
        onClick={() => setIsActive(!isActive)}
      >
        <ClockIcon />
      </S.IconBox>
      <S.IconBox>
        <LogoIcon />
      </S.IconBox>
      <Link to={`/order/list/${memberId}`}>
        <S.IconBox>
          <BatteryIcon />
        </S.IconBox>
      </Link>
      <S.IconBox>
        <MyPageIcon />
      </S.IconBox>
    </S.Wrapper>
  );
};

export default BottomNav;
