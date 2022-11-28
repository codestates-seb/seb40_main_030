import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { BatteryIcon, ClockIcon, GlobeIcon, MyPageIcon } from '@/assets';
import { navState } from '@/recoil/pagesState';

import * as S from './BottomNav2.style';

const BottomNav2 = () => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(navState);

  useEffect(() => {}, []);
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
        <S.Indicator className='indicator' />
      </S.ListWrap>
    </S.Navigation>
  );
};

export default BottomNav2;
