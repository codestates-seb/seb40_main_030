import { PageWrapper } from '../../components/@commons';
import BottomNav from '../../components/@layout/BottomNav/BottomNav';

const MyProfile = () => {
  return (
    <>
      <PageWrapper title={'My Profile'} path={-1}>
        MyProfileForm
      </PageWrapper>
      <BottomNav />
    </>
  );
};

export default MyProfile;
