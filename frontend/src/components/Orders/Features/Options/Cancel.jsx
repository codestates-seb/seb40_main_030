import { ShadowButton } from '@/components/@commons';
import { useSnackBar } from '@/hooks';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options';

const Cancel = ({ startTime, endTime, setIsModalOpen }) => {
  const { openSnackBar } = useSnackBar();
  const target = document.getElementById('3');

  return (
    <S.ContentWrapper>
      <ModalHeader title='예약 취소하기' />
      <S.ReturnDateContainer>
        <S.Border />
        <DateBox startTime={startTime} fontSize='20px' />
        <S.Border />
        <DateBox endTime={endTime} fontSize='20px' />
      </S.ReturnDateContainer>
      <ShadowButton
        padding={'10px 5px'}
        content='예약 취소하기'
        style={{ width: '70%', marginTop: '10%' }}
        shadow={false}
        onClick={() => {
          setIsModalOpen(false);
          openSnackBar('예약이 성공적으로 취소되었습니다.');

          target.style.display = 'none';
        }}
      />
    </S.ContentWrapper>
  );
};

export default Cancel;
