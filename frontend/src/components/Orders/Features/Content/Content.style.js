import { motion } from 'framer-motion';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    margin-top: 5px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  }

  .border {
    margin: 5px 0;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
`;

const DateStatus = styled.div`
  width: 40px;
  border: 1px solid lightgrey;
  border-radius: 50px;
  text-align: center;
  padding: 5px;
  background-color: transparent;
  color: red;

  font-size: 13;

  margin-right: 10px;
`;

const ContentModal = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 10px;

  width: ${({ width }) => (width ? width : '90%')};
  height: ${({ height }) => (height ? height : '70%')};
  border-radius: 20px;
  background-color: #ffffff;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  z-index: ${({ theme }) => theme.SNACKBAR};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100%;

  span {
    font-size: 13px;
    color: gray;
  }
`;

const BatteryImage = styled.img`
  width: 100%;
  height: 70%;

  margin: 20px 0;
`;

export {
  ButtonContainer,
  DateContainer,
  DateStatus,
  ContentModal,
  ImageContainer,
  BatteryImage,
};
