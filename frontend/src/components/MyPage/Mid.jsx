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
      <S.IconTextDiv>
        <div>결제내역</div>
        <div>공지사항</div>
      </S.IconTextDiv>
    </S.MyPageMidContainer>
  );
};

export default Mid;
