import LoginForm from '@/components/Login/LoginForm';

import { PageWrapper } from '../../../components/@commons';

const Login = () => {
  return (
    <PageWrapper title={'로그인'} path={'/'}>
      <LoginForm />
    </PageWrapper>
  );
};

export default Login;
