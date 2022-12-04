import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DESKTOP_MAX_WIDTH } from '@/constants';

const MapWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;

  z-index: ${({ theme }) => theme.DEFAULT};

  // 데스크탑
  max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
`;

export { MapWrapper };
