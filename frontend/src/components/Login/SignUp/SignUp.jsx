// 회원가입 컴포넌트

import axios from "axios";
import { useEffect, useState } from "react";
import { mockUser } from "../../../mocks/data";
import { useNavigate } from "react-router-dom";

// 해야할것
// 이미지 업로드 에디터, 폰 번호 적을때 라디오버튼같이 010,016, 등 선택할 수 있게! ,
// 주소 찾아서 입력할 api? 라이브러리 가져오기?
// 모든 상태값들을 post로 서버에 보내기 -> 응답으로는 정보들과 고유 id 같이 옴

const SignUp = () => {
  const navigate = useNavigate();
  const [signEmail, setSignEmail] = useState("");

  const [signPassword, setSignPassword] = useState("");
  const [signCheckPw, setSignCheckPw] = useState(""); //  비밀번호 재확인 상태

  const [signNick, setSignNick] = useState("");

  const [signPhone, setSignPhone] = useState("");

  const [signAddress, setSignAddress] = useState("");

  // ----------- 유효성검사 msg 상태값 ---------------
  const [emailMsg, setEmailMsg] = useState(""); // email 유효성검사 msg
  const [isEmail, setIsEmail] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(""); // 첫번째 비밀번호 유효성검사 msg
  const [checkPasswordMsg, setCheckPasswordMsg] = useState(""); // 두 비밀번호 일치 여부 유효성검사 msg
  const [isPassword, setIsPassword] = useState(false);
  const [nickMsg, setNickMsg] = useState(""); // 닉네임 유효성검사 msg
  const [isNick, setIsNick] = useState(false);

  // 이메일 중복체크 유효성검사
  const checkedEmail = () => {
    if (!signEmail.includes("@") || !signEmail.includes(".")) {
      setEmailMsg("email형식에 맞지 않습니다.");
    } else {
      axios
        .get("/api/members")
        .then((res) => {
          let isEmail = res.data.filter((user) => {
            return user.email === signEmail;
          });
          if (isEmail.length === 1) {
            console.log(mockUser); // 회원가입하고 mock유저에
            setEmailMsg("이미 가입된 email입니다.");
          } else {
            setEmailMsg("사용 가능 email입니다.");
            setIsEmail(true);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  // 닉네임 중복체크 유효성검사
  const checkedNick = () => {
    if (signNick.length <= 2) {
      setNickMsg("3글자 이상의 닉네임을 사용하세요.");
    } else {
      axios.get("/api/members").then((res) => {
        let isNick = res.data.filter((user) => {
          return user.nickName === signNick;
        });
        if (isNick.length === 1) {
          setNickMsg("중복된 닉네임입니다.");
        } else {
          setNickMsg("사용가능 닉네임.");
          setIsNick(true);
        }
      });
    }
  };

  const validPasswordMsg = () => {
    if (signPassword.length < 8 || signPassword.length > 15) {
      setPasswordMsg("비밀번호 길이는 8 ~ 15사이로 해주세요.");
    } else {
      setPasswordMsg("적합한 비밀번호.");
      if (signCheckPw !== signPassword) {
        setCheckPasswordMsg("비밀번호 일치하지 않음.");
      } else {
        setCheckPasswordMsg("비밀번호 일치함.");
        setIsPassword(true);
      }
    }
  };

  // 회원가입 submit버튼 눌렀을때!
  const signUpSubmit = async () => {
    checkedEmail();
    checkedNick();
    const user = {
      email: signEmail,
      password: signPassword,
      phone: signPhone,
      nickName: signNick,
      address: signAddress,
      photoUrl: "url",
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    console.log("회원가입버튼함수 내부 user : ", user);

    if (isEmail && isNick) {
      await axios.post("/api/members", user).then((res) => {
        navigate("/login");
        console.log("회원가입버튼 누르고 axios 요청-> 응답 -> : ", res.data);
      });
    }
    console.log(mockUser);
  };

  return (
    <div>
      <h1 style={{ fontSize: "40px" }}>회원가입</h1>
      <div>
        <div>프로필 사진</div>
        <div>
          email (ID)
          <input
            type="text"
            value={signEmail}
            onChange={(e) => {
              setSignEmail(e.target.value);
            }}
          />
          <button onClick={checkedEmail}>중복확인</button>
          {emailMsg === "사용 가능 email입니다." ? (
            <div style={{ color: "green" }}>{emailMsg}</div>
          ) : (
            <div style={{ color: "red" }}>{emailMsg}</div>
          )}
        </div>
        <div>
          <div>
            비밀번호
            <input
              type="text"
              value={signPassword}
              onChange={(e) => {
                setSignPassword(e.target.value);
              }}
              onKeyUp={validPasswordMsg}
            />
          </div>
          {passwordMsg === "적합한 비밀번호." ? (
            <div style={{ color: "green" }}>{passwordMsg}</div>
          ) : (
            <div style={{ color: "red" }}>{passwordMsg}</div>
          )}
        </div>
        <div>
          <div>
            비밀번호 확인
            <input
              type="text"
              value={signCheckPw}
              onChange={(e) => {
                setSignCheckPw(e.target.value);
              }}
              onKeyUp={validPasswordMsg}
            />
          </div>
          {checkPasswordMsg === "비밀번호 일치함." ? (
            <div style={{ color: "green" }}>{checkPasswordMsg}</div>
          ) : (
            <div style={{ color: "red" }}>{checkPasswordMsg}</div>
          )}
        </div>
        <div>
          사용할 닉네임
          <input
            type="text"
            value={signNick}
            onChange={(e) => {
              setSignNick(e.target.value);
            }}
          />
          <button onClick={checkedNick}>중복확인</button>
          {nickMsg === "사용가능 닉네임." ? (
            <div style={{ color: "green" }}>{nickMsg}</div>
          ) : (
            <div style={{ color: "red" }}>{nickMsg}</div>
          )}
        </div>
        <div>
          휴대폰번호
          <input
            type="text"
            value={signPhone}
            onChange={(e) => {
              setSignPhone(e.target.value);
            }}
          />
        </div>
        <div>
          주소
          <input
            type="text"
            value={signAddress}
            onChange={(e) => {
              setSignAddress(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button style={{ backgroundColor: "skyblue" }} onClick={signUpSubmit}>
          회원가입 완료
        </button>
      </div>
    </div>
  );
};

export default SignUp;
