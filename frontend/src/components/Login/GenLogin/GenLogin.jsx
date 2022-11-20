import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginBtn,
  SearchAndSignUpDiv,
  SignUpDiv,
  FailMsgDiv,
} from "./GenLogin.style";
import { userInfoState } from "../../../recoil/userInfoState";
import { useRecoilState } from "recoil";
// 일반 로그인 컴포넌트

const GenLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedLogin, setCheckedLogin] = useState(false);
  const [failMsg, setFailMsg] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  console.log("최상단 recoil userInfo : ", userInfo);
  // Email value값 변경 함수
  const changeInputEmail = (e) => {
    setEmail(e.target.value);
  };
  // Password  value값 변경 함수
  const changeInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickGenLogin = () => {
    const loginData = { email, password };
    const loginConfig = {
      withCredentials: true,
    };

    if (email.length === 0 && password.length === 0) {
      setFailMsg("email과 password를 입력해주세요.");
    } else if (email.length === 0) {
      setFailMsg("email을 입력해주세요.");
    } else if (!email.includes("@")) {
      setFailMsg("email형식이 올바르지 않습니다.");
    } else if (password.length === 0) {
      setFailMsg("password를 입력해주세요.");
    } else {
      setFailMsg(""); // 어차피 로그인되면 이 메시지 못봄 그냥 일단 써둠!
      axios
        .post("/genlogin", loginData, loginConfig)
        .then((res) => {
          console.log("/genlogin post요청으로 받아온 res.data : ", res.data);
          const accessToken = res.data.accesstoken;
          const info = res.data.body[0];

          setUserInfo((prev) => {
            const userInfo = { ...prev };
            userInfo.email = info.email;
            userInfo.nickname = info.nickname;
            userInfo.phone = info.phone;
            userInfo.address = info.address;
            userInfo.photourl = info.photourl;

            return { ...userInfo };
          });
          console.log("GenLogin에서 로그인 axios요청으로 오는 res -> : ", res);
          if (checkedLogin) {
            localStorage.setItem("accesstoken", accessToken); // 로컬스토리지에 accesstoken 저장
            localStorage.setItem("refreshtoken", refreshtoken);
            console.log(
              "localStorage에 넣어진 access_token : ",
              localStorage.getItem("accesstoken")
            );
          }
          console.log("recoil userInfo의 값 : ", userInfo); // 여기서는 안읽힘. 이 함수가 끝나고 나서야 나중에 전역상태로 저장!
          // navigate("/"); // 잠시 주석처리!
          console.log("로그인 성공!");
        })
        .catch((err) => {
          console.log(err);
          setEmail("");
          setPassword("");
          // location.reload();
        });
    }
  };

  return (
    <div>
      <div>
        EMAIL ID :
        <input type="text" value={email} onChange={changeInputEmail} />
      </div>
      <div>
        PW :
        <input type="text" value={password} onChange={changeInputPassword} />
      </div>
      <div>{failMsg ? <FailMsgDiv>{failMsg}</FailMsgDiv> : ""}</div>
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
        <LoginBtn onClick={onClickGenLogin}>로그인</LoginBtn>
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
