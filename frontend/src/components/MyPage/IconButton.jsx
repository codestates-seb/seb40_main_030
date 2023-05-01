import { useNavigate } from 'react-router-dom';

import { PaymentIcon, NoticeIcon } from '../../assets';
import * as S from './IconButton.style';

const Mid = () => {
  const navigate = useNavigate();

  return (
    <S.MyPageMidContainer>
      <S.IconDiv>
        <div>
          <PaymentIcon onClick={() => {}} />
        </div>
        <div>
          <NoticeIcon
            onClick={() => {
              navigate('/notice');
            }}
          />
        </div>
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
