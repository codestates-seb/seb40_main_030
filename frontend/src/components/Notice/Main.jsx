import { noticeList } from '../../mocks/data';
import NoticeList from './List/NoticeList';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.MainContainer>
      {noticeList &&
        noticeList.map((list) => <NoticeList list={list} key={list.id} />)}
    </S.MainContainer>
  );
};

export default Main;
