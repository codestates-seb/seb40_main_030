import { loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';
const Empty = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  console.log(isAuthorized);
  return (
    <div
      style={{
        margin: '10px',
        backgroundColor: 'skyblue',
        border: '1px solid black',
      }}
    >
      {isAuthorized
        ? `로그인상태창 : ${isAuthorized}`
        : `로그인상태창 : ${isAuthorized}`}
    </div>
  );
};

export default Empty;
//페이지 이동 테스트를 위한 임시 페이지
