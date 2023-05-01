import styled from 'styled-components';

export const MyPageStatusContainer = styled.div`
  height: 400px;
  @media (min-width: 376px) {
    height: 100%;
    display: grid;
    grid-template-rows: 50% 50%;
  }
`;

export const ReservingListDiv = styled.div`
  border-bottom: 3px solid #d6d9dc;
  height: 205px;
  padding: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 376px) {
    height: 100%;
  }
`;
export const ReservingText = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
  @media (min-width: 376px) {
    font-size: 18px;
  }
`;
export const UseNowText = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
  @media (min-width: 376px) {
    font-size: 18px;
  }
`;

export const UseNowListDiv = styled.div`
  height: 205px;
  padding: 15px;
  overflow: auto;
  @media (min-width: 376px) {
    font-size: 18px;
  }
`;
