import { useState } from 'react';
import {
  MapIcon,
  LogoIcon,
  BatteryIcon,
  ClockIcon,
  MyPageIcon,
} from '../../assets';
import { BottomSheet } from '../@commons';
import * as S from './BottomNav.style';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const isSplashed = sessionStorage.getItem('isSplashed');

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

      {/* Bottom Sheet 에 대한 visibility transition 이 들어가야함 */}
      {/* session storage 값으로 검증을 하는 방식이 맞는지 확인이 필요함 */}
      {isSplashed !== null ? (
        <div>
          <BottomSheet isActive={isActive} />
        </div>
      ) : null}
    </>
  );
};

export default Nav;
