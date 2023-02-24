import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { BatteryIcon, ClockIcon, GlobeIcon, MyPageIcon } from '@/assets';
import { DESKTOP_MEDIA_QUERY, ROUTES } from '@/constants';
import { ACCESS_TOKEN } from '@/constants/auth';
import { useMediaQuery } from '@/hooks';
import { navState } from '@/recoil/pagesState';

import * as S from './BottomNav.style';

function BottomNav() {
  const navigate = useNavigate();
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(navState);
  const localUserType = localStorage.getItem('userType');
  const sessionUserType = sessionStorage.getItem('userType');
  const localToken = localStorage.getItem(ACCESS_TOKEN);
  const sessionToken = sessionStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (pathname !== ROUTES.HOME.PATH) {
      setIsActive(false);
    }
  }, [pathname]);

  return (
    <S.Navigation
      matches={matches}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
    >
      <S.ListWrap>
        <S.List
          className={
            pathname === ROUTES.HOME.PATH && !isActive ? 'active' : undefined
          }
        >
          <Link to='/'>
            <S.IconContainer onClick={() => setIsActive(false)}>
              <GlobeIcon className='icon' />
              <S.Text className='text'>Home</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
        <S.List className={isActive ? 'active' : undefined}>
          <S.IconContainer
            onClick={() => {
              if (pathname === ROUTES.HOME.PATH) {
                setIsActive(!isActive);
              }
            }}
          >
            <ClockIcon className='icon' />
            <S.Text className='text'>Reservation</S.Text>
          </S.IconContainer>
        </S.List>
        <S.List className={pathname.includes('/order') ? 'active' : undefined}>
          <Link to={ROUTES.ORDERS.PATH}>
            <S.IconContainer>
              <BatteryIcon className='icon' />
              <S.Text className='text'>Bookings</S.Text>
            </S.IconContainer>
          </Link>
        </S.List>
        <S.List
          className={
            pathname.includes('my') || pathname.includes('notice')
              ? 'active'
              : undefined
          }
        >
          <S.IconContainer
            onClick={() => {
              if (localUserType === 'admin' || sessionUserType === 'admin') {
                navigate(ROUTES.BUSINESS.PATH);
              } else {
                navigate(ROUTES.MY_PAGE.PATH);
              }

              if (localToken === null && sessionToken === null) {
                navigate(ROUTES.LOGIN.PATH);
              }
            }}
          >
            <MyPageIcon className='icon' />
            <S.Text className='text'>MyPage</S.Text>
          </S.IconContainer>
        </S.List>
      </S.ListWrap>
    </S.Navigation>
  );
}

export default BottomNav;
