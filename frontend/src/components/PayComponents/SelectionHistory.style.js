import styled from 'styled-components';
import { Button } from '../Home/KakaoMap/Features/MapIndicator.style';

const SelectLayout = styled.div`
height: 640px;
margin: 0 auto;
margin-top: 30px;
`;

const ItemOrder = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
margin-bottom: 30px;
`
const BackButton = styled.button`
position: absolute;
margin-left: 20px;
`

const Product = styled.div`
font-size: 25px;
background-color: ${({ theme }) => theme.main_color_1};
color: white;
height: 50px;
padding: 12px;
`

const ItemLayout = styled.div`
display: flex;
height: 200px;
padding-left: 10px;
margin-top: 50px;
margin-bottom: 30px;
width: 100%;
`
const ItemLayout1 = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const ItemLayout2 = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const ItemDate = styled.div`
font-size: 18px;
margin-top: 25px;
`
const ItemRight = styled.div`
font-size: 18px;
margin-top: 20px;
text-align: right;
`

const ItemLeft = styled.div`
font-size: 18px;
margin-top: 20px;
`

const ItemImg = styled.img`
width: 100px;
margin-left: 10px;
margin-right: 40px;
`


const ItemPlace = styled.div`
font-size: 15px;
padding-top: 10px;
text-align: right;
`


export { SelectLayout, BackButton, ItemOrder, Product, ItemLayout, ItemImg, ItemLayout1, ItemLayout2, ItemRight, ItemLeft, ItemPlace, ItemDate, };
