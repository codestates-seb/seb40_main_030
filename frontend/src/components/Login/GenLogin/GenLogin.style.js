import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '@kfonts/bm-dohyeon';

/* main-01 : #5584AC
  font-01 : #7b8c9f */
export const LoginMidContainer = styled.div`
  padding: 70px 10px 0 10px;
  border: 1px solid black;
`;
export const LoginTypeDiv = styled.div`
  display: flex;
  padding: 15px 0 10px 0;
  font-size: 15px;
  font-weight: bold;
  font-family: 'bm-dohyeon';
  /* border: 1px solid black; */
`; // 로그인타입을 선택하면 진한검정폰트, 선택안된 타입은 연한회색폰트
export const UserTypeLogin = styled.div`
  margin-right: 10px;
  border-bottom: 3px solid black;
`;
export const AdminTypeLogin = styled.div`
  margin-right: 10px;
  border-bottom: 3px solid black;
`;

export const EmailInputDiv = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 100%;
    border: 0 solid white;
  }
`;
export const PasswordInputDiv = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px;
  border: 1px solid #d6d9dc;
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
  /* border: 1px solid black; */
`;
export const CheckBoxText = styled.div`
  padding: 7px 0 5px 2px;
  font-size: 5px;
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
  /* padding-left: 60px; */
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 15px;
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
