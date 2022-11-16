import { EntranceWrapper } from '../../components/Entrance/EntranceStyledComp.style';
import TitleAndLogo from '../../components/Entrance/TitleAndLogo';
import { useNavigate } from 'react-router-dom';

const Entrance = () => {
  const navigate = useNavigate();
  const loginPagingHandler = () => {
    navigate('/login');
  };
  return (
    <EntranceWrapper>
      <TitleAndLogo />
      <button //임시 버튼
        onClick={loginPagingHandler}
        style={{
          color: 'black',
          fontSize: '50px',
          border: '3px solid black',
          margin: '30px',
        }}
      >
        일반회원 로그인
      </button>
    </EntranceWrapper>
  );
};

export default Entrance;
