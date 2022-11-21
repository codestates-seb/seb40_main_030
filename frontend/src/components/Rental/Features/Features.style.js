import styled from 'styled-components';
import { motion } from 'framer-motion';

const BatteryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const BatteryImage = styled.img`
  width: 80%;
  height: 50%;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const Capacity = styled.span`
  font-size: 25px;
  font-weight: 900;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-right: 5px;
  margin-bottom: 10px;
`;

export { BatteryContainer };

export { ImageContainer, BatteryImage };

export { PriceContainer, ProductInfoContainer, Capacity, Price };
