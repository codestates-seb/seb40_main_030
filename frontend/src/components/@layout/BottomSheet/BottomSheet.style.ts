import { motion } from 'framer-motion';
import styled from 'styled-components';

import {
  BOTTOM_SHEET_HEIGHT,
  DESKTOP_MAX_WIDTH,
  DESKTOP_MARGIN_LEFT,
} from '../../../constants';

const Wrapper = styled(motion.div)<{ matches: boolean }>`
  flex-direction: column;
  position: fixed;
  z-index: ${({ theme }) => theme.MIDDLE};
  top: 25vh;
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.WHITE};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  overflow: auto;

  // 데스크탑
  max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
  left: ${({ matches }) => matches && DESKTOP_MARGIN_LEFT};

  @media screen and (max-height: 700px) {
    top: 5vh;
  }

  @media screen and (max-height: 800px) {
    top: 15vh;
  }
`;

const InfoBox = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  overflow: auto;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.WHITE};
`;

const HeaderWrapper = styled(motion.div)`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const HandleBar = styled(motion.div)`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;

const ContentWrapper = styled.div`
  /* -webkit-overflow-scrolling: touch; */
  height: 80vh;
  padding: 10px;
`;

export { Wrapper, HeaderWrapper, InfoBox, HandleBar, ContentWrapper };
