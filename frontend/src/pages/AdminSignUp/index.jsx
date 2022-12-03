import AdminSignUpForm from '../../components/AdminSignUp/AdminSignUpForm';
import { PageWrapper } from '../../components/@commons';

const AdminSignUp = () => {
  return (
    <PageWrapper title={'관리자 등록'} path={'/login'}>
      <AdminSignUpForm />
    </PageWrapper>
  );
};

export default AdminSignUp;
