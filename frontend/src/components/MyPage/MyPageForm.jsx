import Top from './ShortInfo';
import Mid from './IconButton';
import Bottom from './StatusList';
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
