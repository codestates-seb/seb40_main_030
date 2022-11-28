import { useLocation, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { BatteryIcon, ClockIcon, GlobeIcon, MyPageIcon } from '@/assets';
import { useMediaQuery } from '@/hooks';
import { navState } from '@/recoil/pagesState';

import * as S from './BottomNav.style';

const BottomNav = () => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(navState);
  const matches = useMediaQuery('(min-width: 390px)');

  return (
    <S.Navigation>
      <S.ListWrap>
        <S.List className={pathname === '/' && !isActive && 'active'}>
          <Link to='/'>
            <S.IconContainer onClick={() => setIsActive(false)}>
              <GlobeIcon className='icon' />
              <S.Text className='text'>Home</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
        <S.List className={isActive && 'active'}>
          <S.IconContainer onClick={() => setIsActive(!isActive)}>
            <ClockIcon className='icon' />
            <S.Text className='text'>Reservation</S.Text>
          </S.IconContainer>
        </S.List>
        <S.List className={pathname.includes('/order') && 'active'}>
          <Link to='/order/list'>
            <S.IconContainer>
              <BatteryIcon className='icon' />
              <S.Text className='text'>Bookings</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
        <S.List>
          <Link to='/mypage'>
            <S.IconContainer>
              <MyPageIcon className='icon' />
              <S.Text className='text'>MyPage</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
        {matches && <S.Indicator className='indicator' />}
      </S.ListWrap>
    </S.Navigation>
  );
};

export default BottomNav;
