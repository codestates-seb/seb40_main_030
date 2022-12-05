import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DESKTOP_MARGIN_LEFT, DESKTOP_MAX_WIDTH } from '@/constants';

const Wrapper = styled(motion.div)`
  position: fixed;
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

  z-index: ${({ theme }) => theme.SPLASH_SCREEN};
`;

const SplashImageContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  /* right: ${({ matches }) => (matches ? '1%' : '1%')}; */

  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.WHITE};
`;

const SplashImage = styled(motion.img)`
  position: relative;
  background: ${({ theme }) => theme.WHITE};
`;

export { Wrapper, DesktopMessage, SplashImageContainer, SplashImage };
