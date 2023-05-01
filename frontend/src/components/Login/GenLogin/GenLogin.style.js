import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginMidContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  padding: 70px 10px 0 10px;
  /* border: 1px solid red; */
  @media (min-width: 376px) {
    padding: 100px 180px 0 180px;
  }
`;
export const LoginTypeDiv = styled.div`
  display: flex;
  /* margin-right: 185px; */
  padding: 0px 0 15px 0;
  font-size: 15px;
  font-weight: bold;
  /* border: 1px solid blue; */
  @media (min-width: 376px) {
    margin-bottom: 5px;
    font-size: 20px;
  }
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
  @media (min-width: 376px) {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 8px 0 8px;
  }
  input {
    width: 100%;
    /* font-size: 13.55px; */
    font-size: 14px;
    border: 0 solid white;
    :focus {
      /* border-radius: 2px; */
      outline: none;
    }
    @media (min-width: 376px) {
      font-size: 17px;
    }
  }
`;
// input:focus {outline: 2px solid #d50000;} /* outline 테두리 속성 수정 */
// input:focus {outline: none;} /* outline 테두리 없애기 */

export const AdminEmailInputDiv = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 5px 5px 5px;
  border: 1px solid #5584ac;
  border-radius: 3px;
  margin-bottom: 7px;
  @media (min-width: 376px) {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 8px 0 8px;
  }
  input {
    width: 100%;
    font-size: 14px;
    border: 0 solid white;
    :focus {
      outline: none;
      /* border-radius: 2px; */
    }
    @media (min-width: 376px) {
      font-size: 17px;
    }
  }
`;
export const PasswordInputDiv = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 5px 5px 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 3px;
  @media (min-width: 376px) {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 8px 0 8px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    border: 0 solid white;
    :focus {
      outline: none;
    }
    @media (min-width: 376px) {
      font-size: 17px;
    }
  }
`;
export const AdminPasswordInputDiv = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 5px 5px 5px;
  border: 1px solid #5584ac;
  border-radius: 3px;
  margin-bottom: 3px;
  @media (min-width: 376px) {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 8px 0 8px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    border: 0 solid white;
    :focus {
      /* border-radius: 2px; */
      outline: none;
    }
    @media (min-width: 376px) {
      font-size: 17px;
    }
  }
`;
export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (min-width: 376px) {
    gap: 3px;
    margin-bottom: 50px;
  }
`;
export const CheckBoxText = styled.div`
  padding: 7px 0 5px 2px;
  font-size: 13px;
  @media (min-width: 376px) {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;

export const LoginBtn = styled.button`
  width: ${({ matches }) => (matches ? '100%' : '100%')};
  height: 45px;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  margin-bottom: 35px;
  background-color: #5584ac;
  @media (min-width: 376px) {
    height: 50px;
    margin-bottom: 20px;
  }
`;
export const NoLoginBtn = styled.button`
  width: ${({ matches }) => (matches ? '100%' : '100%')};
  height: 45px;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  margin-bottom: 35px;
  background-color: #d6d9dc;
  @media (min-width: 376px) {
    height: 50px;
    margin-bottom: 20px;
  }
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

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 376px) {
    flex-direction: column;
    /* padding: 0 36px 0 39px; */
  }
`;
