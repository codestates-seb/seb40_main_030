import { PageWrapper } from '../../../components/@commons';
import LoginForm from '../../../components/Login/LoginForm';

const Login = () => {
  return (
    <PageWrapper title={'로그인'} path={'/'}>
      <LoginForm />
    </PageWrapper>
  );
};

export default Login;
