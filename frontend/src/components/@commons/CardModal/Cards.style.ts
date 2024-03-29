import { motion } from 'framer-motion';
import styled from 'styled-components';

const Main = styled(motion.div)`
  display: grid;
  height: 100vh;
  place-items: center center;
  font-family: 'Poppins', sans-serif;
`;

const CardWrapper = styled(motion.div)`
  display: grid;
  width: 15rem;
  position: relative;
  bottom: 160px;
  right: 80px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 20px;
  grid-gap: 40px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-out;

  z-index: ${({ theme }) => theme.SPlASH_SCREEN};
`;

const Card = styled(motion.div)`
  width: 13rem;
  background-color: #1c1b29;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
`;

const Container = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  &:after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px 20px 0 0;
    opacity: 0.7;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
  z-index: ${({ theme }) => theme.DEFAULT};
`;

const Details = styled.div`
  padding: 20px 10px;

  > h3 {
    color: #ffffff;
    font-weight: 600;
    font-size: 18px;
    margin: 10px 0 15px 0;
  }

  > p {
    color: #a0a0a0;
    font-size: 15px;
    line-height: 30px;
    font-weight: 400;

    span {
      color: white;
      margin-left: 10px;
      font-size: 20px;
    }
  }

  .close {
    display: flex;
    color: white;
    justify-content: end;
    margin-right: 10px;
    font-size: 20px;
    z-index: ${({ theme }) => theme.SNACKBAR};
  }
`;

// ShadowCard

const ShadowCard = styled(motion.div)<{
  width?: string | number;
  height?: string | number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.WHITE};
  border-radius: 20px;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export { Main, CardWrapper, Card, Container, Image, Details, ShadowCard };
