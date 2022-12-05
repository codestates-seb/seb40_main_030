import { ShadowButton } from '@/components/@commons';
import { useSnackBar } from '@/hooks';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options';

const Return = ({ endTime, setIsModalOpen }) => {
  const { openSnackBar } = useSnackBar();
  const target = document.getElementById('7');

  return (
    <S.ContentWrapper>
      <ModalHeader title='배터리 반납하기' />
      <S.ReturnDateContainer>
        <S.Border />
        <DateBox endTime={endTime} fontSize='20px' />
        <S.Border />
        <DateBox endTime={new Date().getTime()} fontSize='20px' type='현재' />
      </S.ReturnDateContainer>
      <ShadowButton
        padding={'10px 5px'}
        content='반납하기'
        style={{ width: '70%', marginTop: '10%' }}
        shadow={false}
        onClick={() => {
          setIsModalOpen(false);
          openSnackBar('반납이 완료되었습니다.');

          target.style.display = 'none';
        }}
      />
    </S.ContentWrapper>
  );
};

export default Return;
