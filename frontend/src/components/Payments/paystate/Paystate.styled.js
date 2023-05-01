import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DESKTOP_MAX_WIDTH, DESKTOP_MARGIN_LEFT } from '@/constants';

const StateLayout = styled(motion.div)`
height: 640px;
margin: 0 auto;
padding-top: 100px;
width: 100%;

text-align: center;

max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
left: ${({ matches }) => matches && DESKTOP_MARGIN_LEFT};
`;

const StateTitle = styled.div`
font-weight: bold;
text-align: center;
margin-bottom: 30px;
font-size: 30px;
`


const StateDetail = styled.div`
font-size: 30px;
margin-bottom: 30px;
`


const StateIcon = styled.img`
width: 300px;
margin-top: 10px;
`

export { StateLayout, StateTitle, StateDetail, StateIcon };
