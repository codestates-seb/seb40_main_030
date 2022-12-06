import { GuideImg, SaleImg } from '../../../assets/index';
import * as S from './NoticeList.style';

const NoticeList = ({ list }) => {
  return (
    <S.NoticeListDiv>
      <S.StatusDiv>
        {/* <S.StatusText>{list.status}</S.StatusText> */}
        {list.type === 'notice' ? (
          <>
            <S.StatusText>{list.status}</S.StatusText>
            <S.StatusImgDiv src={GuideImg} />
          </>
        ) : (
          <>
            <S.StatusText>{list.status}</S.StatusText>
            <S.StatusImgDiv src={SaleImg} />
          </>
        )}
        {/* <S.StatusImgDiv src={SaleImg} /> */}
      </S.StatusDiv>
      <S.ContentDiv>
        <S.TitleDiv>{list.title}</S.TitleDiv>
        <S.TextDiv>{list.text}</S.TextDiv>
        {list.period ? (
          <S.DateDiv>기간:{list.period}</S.DateDiv>
        ) : (
          <S.DateDiv></S.DateDiv>
        )}
        {/* <S.DateDiv>기간:{list.period}</S.DateDiv> */}
      </S.ContentDiv>
    </S.NoticeListDiv>
  );
};

export default NoticeList;
