import styled from 'styled-components';

const SelectLayout = styled.div`
height: 640px;
margin: 0 auto;
margin-top: 20px;
`;

const ItemTitle = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
margin-bottom: 10px;
`

const Product = styled.div`
font-size: 25px;
background-color: var(--main-01);
color: white;
height: 50px;
padding: 10px;
`

const ItemLayout = styled.div`
margin-top: 30px;
margin-left: 10px;
display: flex;
height: 160px;
width: 100%;
`
const ItemLayout1 = styled.div`
padding: 10px;
height: 135px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`
const ItemImg = styled.img`
width: 100px;
margin-left: 10px;
margin-right: 40px;
`
const ItemName = styled.div`
font-size: 20px;
`

const ItemPlace = styled.div`
font-size: 15px;
padding-top: 10px;
text-align: right;
`

const ItemDate = styled.div`
text-align: center;
padding-top: 10px;
`

export { SelectLayout, ItemTitle, Product, ItemLayout, ItemImg, ItemLayout1, ItemName, ItemPlace, ItemDate, };
