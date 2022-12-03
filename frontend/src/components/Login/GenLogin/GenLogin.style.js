import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '@kfonts/bm-dohyeon';

/* main-01 : #5584AC
  font-01 : #7b8c9f */
export const LoginMidContainer = styled.div`
  padding: 70px 10px 0 10px;
`;
export const LoginTypeDiv = styled.div`
  display: flex;
  padding: 0px 0 15px 0;
  font-size: 15px;
  font-weight: bold;
  font-family: 'bm-dohyeon';
`;
export const UserTypeLogin = styled.div`
  margin-right: 10px;
  border-bottom: 3px solid black;
`;
export const NoUserType = styled.div`
  margin-right: 10px;
  color: gray;
`;

export const AdminTypeLogin = styled.div`
  margin-right: 10px;
  color: #5584ac;
  border-bottom: 3px solid #5584ac;
`;
export const NoAdminType = styled.div`
  margin-right: 10px;
  color: gray;
`;

export const EmailInputDiv = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 5px 5px 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 100%;
    border: 0 solid white;
  }
`;
export const AdminEmailInputDiv = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 5px 5px 5px;
  border: 1px solid #5584ac;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 100%;
    border: 0 solid white;
  }
`;
export const PasswordInputDiv = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 5px 5px 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 3px;
  input {
    width: 100%;
    border: 0 solid white;
  }
`;
export const AdminPasswordInputDiv = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 5px 5px 5px;
  border: 1px solid #5584ac;
  border-radius: 3px;
  margin-bottom: 3px;
  input {
    width: 100%;
    border: 0 solid white;
  }
`;
export const CheckBoxDiv = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const CheckBoxText = styled.div`
  padding: 7px 0 5px 2px;
  font-size: 13px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  margin-bottom: 35px;
  background-color: #5584ac;
`;
export const SearchAndSignUpDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px 0 20px;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 10px;
  font-size: 13px;
`;
export const SearchIdText = styled.div``;
export const SearchPasswordText = styled.div``;

export const SignUpDiv = styled(Link)`
  color: red;
`;
export const EmailFailMsgDiv = styled.div`
  font-size: 12px;
  color: red;
`;

export const FailMsgDiv = styled.div`
  padding: 5px 0 5px 0;
  text-align: center;
  font-size: 15px;
  color: red;
`;
