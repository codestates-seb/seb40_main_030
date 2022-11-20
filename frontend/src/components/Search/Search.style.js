import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const Header = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid lightgrey;

  font-size: ${({ size }) => size};

  z-index: 13;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 30px;

  :focus {
    outline: none;
  }

  font-size: 25px;
  border: none;
`;

const Body = styled.div`
  margin-top: 200px;
`;

export { MotionWrapper, Header, SearchInput, Body };
