import styled from 'styled-components';

const Select = styled.div`
padding-top: 20px;
width: 100%;
height: 300px;

`

const ItemTitle = styled.div`
width: 100%;
height: 50px;
border: solid 3px var(--blue-01);
font-size: 30px;
padding-top: 10px;
`

const Items = styled.div`
width: 100%;
height: 100px;
border: solid 3px var(--green-01);
font-size: 30px;
padding : 35px 0px;

`
const TotalItem = styled.div`
width: 300px;
height: 50px;
border: solid 3px var(--beige-01);
padding: 15px 0;
display: flex;
margin-left: 30px;
justify-content: space-around;
`

export {Select, ItemTitle, Items, TotalItem};