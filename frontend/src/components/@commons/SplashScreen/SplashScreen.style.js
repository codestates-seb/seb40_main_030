import styled from 'styled-components';

import { DESKTOP_MARGIN_LEFT, DESKTOP_MAX_WIDTH } from '@/constants';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
  left: ${({ matches }) => matches && DESKTOP_MARGIN_LEFT};
  z-index: ${({ theme }) => theme.SPLASH_SCREEN};
`;

const DesktopMessage = styled.h1`
  position: absolute;
  left: 20%;
  top: 30%;
  width: 80%;
  height: 40px;

  color: red;

  font-size: 30px;
`;

export { Wrapper, DesktopMessage };
