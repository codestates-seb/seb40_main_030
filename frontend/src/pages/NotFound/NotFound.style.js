import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import { theme } from '@/styles';

const TypeWriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 55%;
  }
`;

const BlinkTextCursor = keyframes`
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  color: ${({ color, theme }) => (color ? color : theme.NOT_FOUND.GRAY)};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : theme.NOT_FOUND.BG_COLOR};
`;

const Message = styled.p`
  position: relative;
  top: 50%;
  width: 24em;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 180%;

  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);

  animation: ${TypeWriter} 1.5s steps(44) 1s 1 normal both,
    ${BlinkTextCursor} 500ms steps(44) infinite normal;
`;

const GoBackButton = styled.button`
  position: relative;
  top: 55%;
  margin: 0 auto;
  width: 200px;
  height: 50px;
  border: 1px solid white;
  border-radius: 10px;

  color: rgba(255, 255, 255, 0.75);
  font-size: 20px;
`;

export { Wrapper, Message, GoBackButton };
