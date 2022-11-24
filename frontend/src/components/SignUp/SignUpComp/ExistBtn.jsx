import useSignUp from '../../../hooks/SignUp/useSignUp';
const ExistBtn = () => {
  const { checkedEmail } = useSignUp();

  return <button onClick={checkedEmail}>중복확인</button>;
};

export default ExistBtn;
