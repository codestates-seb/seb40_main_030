import { motion } from 'framer-motion';
import styled from 'styled-components';

const MotionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 30px;

  background: #fff;

  overflow: hidden;

  z-index: 13;

  .scrollable-component {
    width: 100%;
    box-sizing: content-box;
    -ms-overflow-style: none;

    scrollbar-width: none;

    // overflow 시에도 box-shadow 남겨주는 영역
    margin-top: 8px;
    flex-grow: 1;
    overflow-y: scroll;
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
  height: 8%;
  border-bottom: 1px solid lightgrey;

  z-index: 13;

  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 20px;
  margin: 0 auto;
  margin-bottom: 13px;
`;

export { MotionWrapper, Header, Title };
