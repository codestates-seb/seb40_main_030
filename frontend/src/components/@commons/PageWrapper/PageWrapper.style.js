import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DESKTOP_MAX_WIDTH, DESKTOP_MARGIN_LEFT } from '@/constants';

const DesktopWrapper = styled.div`
  background-color: ${({ theme }) => theme.PEWTER};
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.DESKTOP_WRAPPER};
  position: fixed;
`;

const MotionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100vh;

  padding: 30px;

  background: ${({ theme }) => theme.WHITE};

  // 데스크탑
  max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
  left: ${({ matches }) => matches && DESKTOP_MARGIN_LEFT};

  /* overflow: hidden; */

  z-index: ${({ theme }) => theme.PAGE_WRAPPER};

  .scrollable-component {
    width: 100%;
    box-sizing: content-box;
    -ms-overflow-style: none;

    scrollbar-width: none;

    // overflow 시에도 box-shadow 남겨주는 영역
    margin-top: 8px;
    flex-grow: 1;
    overflow-y: auto;
    margin: 0px -32px;
    margin-top: 8px;
    padding: 0px 32px;
  }

  .scrollable-component::-webkit-scrollbar {
    display: none;
  }
`;

 const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 8%;
  border-bottom: 1px solid lightgrey;

  z-index: ${({ theme }) => theme.PAGE_WRAPPER};

  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 20px;
  margin: 0 auto;
  margin-bottom: 13px;
`;

export { DesktopWrapper, MotionWrapper, Header, Title };
