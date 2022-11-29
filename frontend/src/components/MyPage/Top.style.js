import styled from 'styled-components';
import '@kfonts/bm-dohyeon';
/* main-01 : #5584AC
  font-01 : #7b8c9f */
export const MyPageTopContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  color: white;
  border-bottom: 2px solid #5584ac;
  border-radius: 5px;
  /* border-top: 1px solid black; */
  background-color: #5584ac;
`;
export const NickNameDiv = styled.div`
  margin: 5px 0 5px 0;
  font-size: 15px;
`;
export const EmailDiv = styled.div`
  margin: 0 0 5px 5px;
  font-size: 13px;
`;
export const MyInfoAndLogoutDiv = styled.div`
  display: flex;
  margin: 0 10px 10px 41%;
  /* justify-content: space-between; */
  gap: 65px;
`;
export const MyInfoDiv = styled.div`
  background-color: #d6d9dc;
  width: 70px;

  padding: 4px 7px 4px 4px;
  font-size: 8px;
  color: black;
  /* border: 1px solid black; */
  border-radius: 15px;
`;
