import styled from 'styled-components';

export const MyPageMidContainer = styled.div`
  border-bottom: 3px solid #d6d9dc;
  height: 100px;
  @media (min-width: 376px) {
    display: flex;
    flex-direction: column;
    height: 140px;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70%;
  padding-top: 20px;
  padding-left: 7px;
  div {
    display: flex;
    justify-content: center;
    width: 80px;
    cursor: pointer;
    @media (min-width: 376px) {
      height: 79px;
    }
  }
`;
export const IconTextDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  font-size: 8px;
  div {
    cursor: pointer;
  }
  @media (min-width: 376px) {
    font-size: 13px;
  }
`;
export const PaymentTextDiv = styled.div`
  margin-right: 10px;
`;
export const NoticeTextDiv = styled.div``;
