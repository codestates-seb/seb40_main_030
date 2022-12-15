import { GuideImg, SaleImg } from '../../../assets/index';
import * as S from './NoticeList.style';

const NoticeList = ({ list }) => {
  return (
    <S.NoticeListDiv>
      <S.StatusDiv>
        {list.type === 'notice' ? (
          <>
            <S.StatusText>{list.status}</S.StatusText>
            <S.StatusImgDiv
              src={GuideImg}
              style={{ height: '60%', marginTop: '5px' }}
            />
          </>
        ) : (
          <>
            <S.StatusText>{list.status}</S.StatusText>
            <S.StatusImgDiv src={SaleImg} />
          </>
        )}
      </S.StatusDiv>
      <S.ContentDiv>
        <S.TitleDiv>{list.title}</S.TitleDiv>
        <S.TextDiv>{list.text}</S.TextDiv>
        {list.period ? (
          <S.DateDiv>기간:{list.period}</S.DateDiv>
        ) : (
          <S.DateDiv></S.DateDiv>
        )}
      </S.ContentDiv>
    </S.NoticeListDiv>
  );
};

export default NoticeList;
