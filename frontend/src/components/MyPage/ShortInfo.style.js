import styled from 'styled-components';

export const MyPageTopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;
  color: white;
  border-bottom: 2px solid #7b8c9f;
  border-radius: 5px;
  background-color: #7b8c9f;
  @media (min-width: 376px) {
    height: 200px;
    justify-content: center;
    gap: 5px;
    margin-bottom: 30px;
  }
`;
export const ImgNickEmailDiv = styled.div`
  @media (min-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
export const NickNameDiv = styled.div`
  margin: 7px 0 5px 0;
  font-size: 15px;
  @media (min-width: 376px) {
    font-size: 18px;
  }
`;
export const EmailDiv = styled.div`
  margin: 0 0 7px 5px;
  font-size: 13px;
  @media (min-width: 376px) {
    font-size: 16px;
  }
`;
export const MyInfoAndLogoutContainer = styled.div`
  margin-left: 40%;
  padding: 0 10px 5px 0;
  @media (min-width: 376px) {
    margin-left: 325px;
  }
`;
export const MyInfoAndLogoutDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MyInfoDiv = styled.div`
  cursor: pointer;
  background-color: #d6d9dc;
  width: 70px;
  padding: 4px 7px 4px 4px;
  font-size: 8px;
  color: black;
  border-radius: 15px;
  @media (min-width: 376px) {
    width: 90px;
    font-size: 13px;
  }
  :hover {
    background-color: gray;
  }
`;
