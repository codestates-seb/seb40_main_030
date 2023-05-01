import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DESKTOP_MAX_WIDTH, DESKTOP_MARGIN_LEFT } from '@/constants';

const CompletedLayout = styled(motion.div)`
height: 640px;
margin: 0 auto;
margin-top: 30px;
width: 100%;

position: fixed;
text-align: center;

max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
left: ${({ matches }) => matches && DESKTOP_MARGIN_LEFT};
`;

const CompletedTitle = styled.div`
font-weight: bold;
text-align: center;
margin-bottom: 30px;
`

const CompletedLayOut = styled.div`
    border: 3px solid gray;
    width: 350px;
    height: 370px;
    padding: 40px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 15px;
`

const CompletedLayOutDetail = styled.p`
text-align: left;
`
const Time = styled.div`
font-size: 17px;
margin-top: 15px;
text-align: left;
`

const CompletedIcon = styled.img`
width: 150px;
margin-top: 10px;
`

const ReservationTitle = styled.div`
font-size: 30px;
border-radius: 15px;
text-align: center;
width: 230px;
margin: 0 auto;
padding-top: 10px;
`

const ReservationLayout = styled.div`
font-size: 20px;
text-align: justify;
border: 2px solid gray;
display: flex;
justify-content: space-around;
height: 100px;
margin: 10px 20px 40px 20px;
border-radius: 15px;
padding-top: 10px;
`

const Reservation = styled.div`
font-weight: bold;
color: ${({theme}) => theme.COLOR_FONT};
`

const ReservationItem = styled.div`
text-align: right;
`

const ReservationDetail = styled.div`
margin-top: 10px;
`

const BtnLayout = styled.div`
`

const HomeBtn = styled.button`
font-size: 25px;
background-color: ${({theme}) => theme.COLOR_BLUE};
color: white;
margin-right: 10px;
height: 50px;
width: 150px;
border-radius: 15px;
`

const MyPageBtn = styled.button`
font-size: 25px;
background-color: ${({theme}) => theme.COLOR_MAIN};
color: white;
height: 50px;
width: 150px;
border-radius: 15px;
`

export { CompletedLayout, CompletedIcon, CompletedTitle, CompletedLayOut, CompletedLayOutDetail, Time, ReservationLayout, ReservationTitle, Reservation, ReservationItem, ReservationDetail,BtnLayout, MyPageBtn, HomeBtn }
