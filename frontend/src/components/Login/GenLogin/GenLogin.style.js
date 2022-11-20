import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginBtn = styled.button`
  width: 100px;
  background-color: skyblue;
`;
export const SearchAndSignUpDiv = styled.div`
  display: flex;
  div {
    cursor: pointer;
  }
`;
export const SignUpDiv = styled(Link)`
  color: red;
`;
export const FailMsgDiv = styled.div`
  font-size: 15px;
  color: red;
`;
