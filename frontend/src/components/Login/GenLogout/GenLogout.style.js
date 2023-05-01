import styled from 'styled-components';

export const LogoutBtn = styled.button`
  background-color: #d6d9dc;
  font-size: 8px;
  font-weight: bold;
  border-radius: 3px;
  color: black;
  @media (min-width: 376px) {
    border-radius: 10px;
    font-size: 13px;
    width: 80px;
  }
  :hover {
    background-color: gray;
  }
`;
