import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginBtn = styled.button`
  width: 100px;
  background-color: skyblue;
`;
const SearchAndSignUpDiv = styled.div`
  display: flex;
  div {
    cursor: pointer;
  }
`;
const SignUpDiv = styled(Link)`
  color: red;
`;

const GenLogin = () => {
  const [inputId, setInputId] = useState("");
  const [inputPassWord, setInputPassWord] = useState("");
  const [checkedLogin, setCheckedLogin] = useState(false);

  console.log("상태유지 체크박스 state 값 : ", checkedLogin);

  return (
    <div>
      <div>
        ID
        <input type="text" value={inputId} onChange={setInputId} />
      </div>
      <div>
        PW
        <input type="text" value={inputPassWord} onChange={setInputPassWord} />
      </div>
      <div>
        로그인 상태 유지
        <input
          type="checkbox"
          checked={checkedLogin}
          onChange={() => {
            setCheckedLogin(!checkedLogin);
          }}
        />
      </div>
      <div>
        <LoginBtn>로그인</LoginBtn>
      </div>
      <SearchAndSignUpDiv>
        <div>아이디 찾기</div>
        <div>비밀번호 찾기</div>
        <SignUpDiv to={"/signup"}>회원가입</SignUpDiv>
      </SearchAndSignUpDiv>
    </div>
  );
};

export default GenLogin;
