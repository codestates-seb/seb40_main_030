// 일반 로그아웃 컴포넌트
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const GenLogout = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem("accesstoken"); // 전역상태저장
    localStorage.removeItem("refreshtoken"); // 쿠키에 저장

    navigate("/");
  };

  return (
    <div>
      <button style={{ backgroundColor: "skyblue" }} onClick={onClickLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default GenLogout;
