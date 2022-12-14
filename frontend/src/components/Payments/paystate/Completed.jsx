import { useNavigate } from 'react-router-dom';

import { CompletedIcon } from '@/assets';
import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import * as S from './Completed.styled';

const Completed = () => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  const navigate = useNavigate();
  const homeClick = () => {
    navigate('/');
  };

  const myPageClick = () => {
    navigate('/mypage');
  };

  return (
    <S.CompletedLayout matches={matches}>
      <S.CompletedTitle>보배빌림</S.CompletedTitle>
      <S.CompletedLayOut>
        <S.CompletedLayOutDetail>
          <b>예약</b>이
        </S.CompletedLayOutDetail>
        <S.CompletedLayOutDetail>
          <b>완료</b>되었습니다.
        </S.CompletedLayOutDetail>
        <S.CompletedIcon src={CompletedIcon} />
      </S.CompletedLayOut>
      <S.BtnLayout>
        <S.HomeBtn onClick={homeClick}>홈 화면 가기</S.HomeBtn>
        <S.MyPageBtn onClick={myPageClick}>마이페이지</S.MyPageBtn>
      </S.BtnLayout>
    </S.CompletedLayout>
  );
};

export default Completed;
