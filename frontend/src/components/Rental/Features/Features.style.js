import { motion } from 'framer-motion';
import styled from 'styled-components';

const BatteryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const ProductWrapper = styled.div`
  display: flex;
  height: 80%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;

  span {
    font-size: 13px;
    color: gray;
  }
`;

const BatteryImage = styled.img`
  margin-top: 20px;
  width: 80%;
  height: 50%;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px 0;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const BatteryName = styled.span`
  font-size: 15px;
  font-weight: 900;
`;

const Capacity = styled.span`
  font-weight: bold;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;

  span {
    font-size: 15px;
    padding: 0;
    margin: 0;
    margin-top: 10px;
  }
`;

const Price = styled.div`
  font-size: 25px;
  font-weight: 900;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const PricePerMin = styled.span`
  font-size: 13px;
  color: gray;
  font-weight: 400;

  span {
    font-size: 10px;
  }
`;

const AddressDetail = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5%;

  span {
    font-size: 20px;
    font-weight: 600;
    color: #1070fc;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

export { BatteryContainer, ProductWrapper };

export { ImageContainer, BatteryImage };

export {
  PriceContainer,
  ProductInfoContainer,
  BatteryName,
  Capacity,
  Price,
  AddressDetail,
  PricePerMin,
};

export { ChartWrapper };
