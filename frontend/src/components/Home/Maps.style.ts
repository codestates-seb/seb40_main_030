import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DESKTOP_MAX_WIDTH, DESKTOP_MARGIN_LEFT } from '@/constants';
import { Matches } from '@/@types';

const Wrapper = styled(motion.div)<{ matches: Matches }>`
  width: 100%;
  height: 100%;
  position: fixed;

  max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
  left: ${({ matches }) => matches && DESKTOP_MARGIN_LEFT};
`;

export { Wrapper };
