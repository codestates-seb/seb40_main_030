import styled from 'styled-components';

const ItemLayout = styled.div`
display: flex;
height: 200px;
padding-left: 10px;
margin-top: 50px;
margin-bottom: 30px;
width: 100%;
`

const ItemImg = styled.img`
object-fit: fill;
width: 110px;
height: 110px;
margin-left: 10px;
margin-right: 40px;
margin-top: 30px;
`

const ItemDetails = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const ItemDetail = styled.div`
font-size: 15px;
margin-top: 20px;
`

const ItemDate = styled.div`
font-size: 15px;
margin-top: 25px;
`

const PayDetails = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const PayDetail = styled.div`
font-size: 15px;
margin-top: 20px;
text-align: right;
`

export { ItemLayout, ItemImg, ItemDetails, PayDetails, PayDetail, ItemDetail, ItemDate };
