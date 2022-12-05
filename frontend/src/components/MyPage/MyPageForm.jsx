import Top from './Top';
import Mid from './Mid';
import Bottom from './Bottom';
import * as S from './MyPageForm.style';

const MyPageForm = () => {
  return (
    <S.MyPageFormContainer>
      <Top />
      <Mid />
      <Bottom />
    </S.MyPageFormContainer>
  );
};
export default MyPageForm;
