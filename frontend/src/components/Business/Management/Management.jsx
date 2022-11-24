import * as S from './Management.style';
import ManagementButton from './ManagementButton';

const Management = () => {
  return (
    <S.ButtonWrapper>
      <ManagementButton action={'add'} />
      <ManagementButton action={'remove'} />
    </S.ButtonWrapper>
  );
};

export default Management;
