import { motion } from 'framer-motion';
import styled from 'styled-components';

const MotionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  padding: 30px;

  background: #fff;

  z-index: 13;

  overflow: auto;
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
