import NoticeList from './List/NoticeList';
import * as S from './Main.style';
import { noticeList } from '../../mocks/data';

const Main = () => {
  console.log('noticeList : ', noticeList);
  return (
    <S.MainContainer>
      {noticeList &&
        noticeList.map((list) => <NoticeList list={list} key={list.id} />)}
    </S.MainContainer>
  );
};

export default Main;
