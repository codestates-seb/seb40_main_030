import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { BatteryIcon, ClockIcon, GlobeIcon, MyPageIcon } from '@/assets';
import { ROUTES } from '@/constants';
import { navState } from '@/recoil/pagesState';

import * as S from './BottomNav.style';

const BottomNav = ({ matches }) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(navState);

  useEffect(() => {
    if (pathname !== ROUTES.HOME.PATH) {
      setIsActive(false);
    }
  }, [pathname]);

  return (
    <S.Navigation matches={matches}>
      <S.ListWrap>
        <S.List
          className={pathname === ROUTES.HOME.PATH && !isActive && 'active'}
        >
          <Link to='/'>
            <S.IconContainer onClick={() => setIsActive(false)}>
              <GlobeIcon className='icon' />
              <S.Text className='text'>Home</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
        <S.List className={isActive && 'active'}>
          <S.IconContainer
            onClick={() =>
              pathname === ROUTES.HOME.PATH && setIsActive(!isActive)
            }
          >
            <ClockIcon className='icon' />
            <S.Text className='text'>Reservation</S.Text>
          </S.IconContainer>
        </S.List>
        <S.List className={pathname.includes('/order') && 'active'}>
          <Link to={ROUTES.ORDERS.PATH}>
            <S.IconContainer>
              <BatteryIcon className='icon' />
              <S.Text className='text'>Bookings</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
        <S.List>
          <Link to='/mypage'>
            <S.IconContainer
            // onClick={() => {
            //   if (
            //     localStorage.getItem('accesstoken') ||
            //     sessionStorage.getItem('accesstoken')
            //   ) {
            //     navigate('/mypage');
            //   } else {
            //     navigate('/login');
            //   }
            // }}
            >
              <MyPageIcon className='icon' />
              <S.Text className='text'>MyPage</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
      </S.ListWrap>
    </S.Navigation>
  );
};

export default BottomNav;
