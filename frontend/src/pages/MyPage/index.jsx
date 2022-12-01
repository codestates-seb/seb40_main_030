import { PageWrapper } from '../../components/@commons';
import BottomNav from '../../components/@layout/BottomNav/BottomNav';
import MyPageForm from '../../components/MyPage/MyPageForm';

const MyPage = () => {
  return (
    <>
      <PageWrapper title={'마이페이지'} path={'/'}>
        <MyPageForm />
      </PageWrapper>
      <BottomNav />
    </>
  );
};

export default MyPage;
