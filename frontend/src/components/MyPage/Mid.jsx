import * as S from './Mid.style';
import { PaymentIcon, NoticeIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Mid = () => {
  const navigate = useNavigate();

  return (
    <S.MyPageMidContainer>
      <S.IconDiv>
        <PaymentIcon onClick={() => {}} />
        <NoticeIcon />
      </S.IconDiv>
    </S.MyPageMidContainer>
  );
};

export default Mid;
