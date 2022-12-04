import { PageWrapper } from '../../components/@commons';
import BottomNav from '../../components/@layout/BottomNav/BottomNav';
import NoticeForm from '../../components/Notice/NoticeForm';

const Notice = () => {
  return (
    <>
      <PageWrapper title={'공지사항'} path={-1}>
        <NoticeForm />
      </PageWrapper>
      <BottomNav />
    </>
  );
};

export default Notice;
