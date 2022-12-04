import { PageWrapper } from '../../components/@commons';
import BottomNav from '../../components/@layout/BottomNav/BottomNav';
import MyProfileForm from '../../components/MyProfile/MyProfileForm';

const MyProfile = () => {
  return (
    <>
      <PageWrapper title={'My Profile'} path={'/mypage'}>
        <MyProfileForm />
      </PageWrapper>
      <BottomNav />
    </>
  );
};

export default MyProfile;
