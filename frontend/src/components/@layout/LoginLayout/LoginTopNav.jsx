import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // react 폰트어썸
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '@kfonts/bm-dohyeon'; // 배민 도현체 설치후 import
/* main-01 : #5584AC
  font-01 : #7b8c9f */
const LoginTopContainer = styled.div`
  display: flex;
  background-color: #7b8c9f;
  /* border-bottom: 1px solid black; */
`;

const HomeIcon = styled.div`
  padding: 5px 0 5px 10px;
  font-size: 30px;
`;
const LoginText = styled.div`
  width: 100%;
  padding: 13px 20px 0 0;
  text-align: center;
  font-family: 'bm-dohyeon';
  /* border: 1px solid black; */
`;

const LoginTopNav = () => {
  return (
    <LoginTopContainer>
      <HomeIcon>
        <FontAwesomeIcon icon={faArrowLeft} />
      </HomeIcon>
      <LoginText>로그인</LoginText>
    </LoginTopContainer>
  );
};

export default LoginTopNav;
