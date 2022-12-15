import * as S from './IconButton.style';
import { PaymentIcon, NoticeIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Mid = () => {
  const navigate = useNavigate();

  return (
    <S.MyPageMidContainer>
      <S.IconDiv>
        <PaymentIcon onClick={() => {}} />
        <NoticeIcon
          onClick={() => {
            navigate('/notice');
          }}
        />
      </S.IconDiv>
      <S.IconTextDiv>
        <S.PaymentTextDiv onClick={() => {}}>결제내역</S.PaymentTextDiv>
        <S.NoticeTextDiv
          onClick={() => {
            navigate('/notice');
          }}
        >
          공지사항
        </S.NoticeTextDiv>
      </S.IconTextDiv>
    </S.MyPageMidContainer>
  );
};

export default Mid;
