import PageWrapper from '../../components/@commons/PageWrapper/PageWrapper';
import SignUpForm from '../../components/SignUp/SignUpForm';

const SignUp = () => {
  return (
    <PageWrapper title={'회원가입'} path={'/login'}>
      <SignUpForm />
    </PageWrapper>
  );
};

export default SignUp;
