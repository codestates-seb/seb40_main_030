import * as S from './NoticeList.style';

const NoticeList = ({ list }) => {
  return (
    <S.NoticeListDiv>
      <S.TitleDiv>{list.title}</S.TitleDiv>
      <S.TextDiv>{list.text}</S.TextDiv>
    </S.NoticeListDiv>
  );
};

export default NoticeList;
