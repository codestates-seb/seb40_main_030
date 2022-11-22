import { useNavigate } from 'react-router-dom';

import * as S from './NotFound.style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper exit={{ opacity: 1 }} transition={{ duration: 3 }}>
      <S.Message>404 Not Found</S.Message>
      <S.GoBackButton onClick={() => navigate(-1)}>뒤로가기</S.GoBackButton>
    </S.Wrapper>
  );
};

export default NotFound;
