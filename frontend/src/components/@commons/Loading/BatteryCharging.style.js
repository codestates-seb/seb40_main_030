import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* margin: 0 auto;
  width: 200px;
  height: 100vh; */

  background: ${({ theme }) => theme.WHITE};
`;

const BatteryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  width: 200px;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  color: green;
  margin-bottom: 20px;
`;

const BatteryAnimation = keyframes`
 from {
        width: 0px;
        background: #f00;
        border-radius: 3px;
      }
      to {
        width: 72px;
        background: #1070fc;
        border-radius: 3px;

      }

`;

const Battery = styled.div`
  position: relative;
  display: block;
  margin: 20px 65px;
  background: black;
  width: 10px;
  height: 28px;
  float: left;

  ::before {
    content: '';
    display: block;
    background: transparent;
    border: 6px solid #ffffff;
    margin: -12px;
    width: 85px;
    height: 40px;
    position: absolute;
    border-radius: 10px;
    -moz-box-shadow: 0 0 5px 5px #888;
    -webkit-box-shadow: 0 0 5px 5px #888;
    // 배터리 몸통 box-shadow
    box-shadow: -2px 0 5px 2px #222;
    z-index: ${({ theme }) => theme.DEFAULT};
  }

  ::after {
    content: '';
    display: block;
    // 배터리 헤드 부분
    background: white;
    border: 6px solid black;
    margin: 0px 80px;
    width: 7px;
    height: 16px;
    position: absolute;
    border-radius: 5px;
    -moz-box-shadow: 0 0 5px 5px #888;
    -webkit-box-shadow: 0 0 5px 5px #888;
    box-shadow: 0px 0px 3px 3px lightgrey;
    z-index: ${({ theme }) => theme.DEFAULT};
  }

  // 배터리 차징 속도
  animation: ${BatteryAnimation} ${({ chargingSpeed }) => chargingSpeed}
    ease-in-out infinite;
`;

const GlowAnimation = keyframes`

from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const Message = styled.span`
  margin-top: 10px;
  margin-left: 30px;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  letter-spacing: 8px;
  clear: both;
  color: black;
  animation: ${GlowAnimation} 3s ease-in-out infinite;
  animation-direction: alternate;
`;

export { Wrapper, Battery, BatteryContainer, Message, Title };
