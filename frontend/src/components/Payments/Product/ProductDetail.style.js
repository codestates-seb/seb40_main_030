import styled from 'styled-components';

const ItemLayout = styled.div`
height: 200px;
margin-top: 60px;
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
position: absolute;
`

const ItemDetailLayout = styled.div`
display: flex;
justify-content: space-between;
margin-left: 150px;
margin-right: 30px;
`

const ItemDetail = styled.div`
font-size: 15px;
margin-top: 20px;
`

const PayDetail = styled.div`
font-size: 15px;
margin-top: 20px;
text-align: right;
`

const ItemDate = styled.div`
font-size: 15px;
margin-top: 25px;
`

export { ItemLayout, ItemImg, ItemDetailLayout, ItemDetail, PayDetail, ItemDate };
