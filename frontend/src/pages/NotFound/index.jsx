import * as S from './NotFound.style';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper exit={{ opacity: 1 }} transition={{ duration: 3 }}>
      <S.Message className='line-1 anim-typewriter'>404 Not Found</S.Message>
      <S.GoBackButton onClick={() => navigate(-1)}>뒤로가기</S.GoBackButton>
    </S.Wrapper>
  );
};

export default NotFound;
