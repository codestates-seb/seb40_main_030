import styled from 'styled-components';

const CompletedLayout = styled.div`
height: 640px;
margin: 0 auto;
margin-top: 30px;
`

const CompletedTitle = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
margin-bottom: 30px;
`

const CompletedLayOut = styled.div`
    border: 1px solid red;
    width: 350px;
    height: 200px;
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
`

const ReservationLayout = styled.div`
font-size: 20px;
text-align: justify;
`

const ReservationTitle = styled.div`
font-size: 30px;
border: 2px solid blue;
border-radius: 15px;
text-align: center;
width: 200px;
margin: 0 auto;
margin-bottom: 30px;
margin-top: 40px;
`

export { CompletedLayout, CompletedTitle, CompletedLayOut, ReservationLayout, ReservationTitle }