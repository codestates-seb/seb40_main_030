import { ShadowButton } from '@/components/@commons';
import useReturnBattery from '@/hooks/Orders/useReturnBattery';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options';

const Return = ({ returnTime, setIsModalOpen, paymentId }) => {
  const { handleReturnBattery } = useReturnBattery();

  return (
    <S.ContentWrapper>
      <ModalHeader title='배터리 반납하기' />
      <S.ReturnDateContainer>
        <S.Border />
        <DateBox returnTime={returnTime} fontSize='20px' />
        <S.Border />
        <DateBox
          returnTime={new Date().getTime()}
          fontSize='20px'
          type='현재'
        />
      </S.ReturnDateContainer>
      <ShadowButton
        padding={'10px 5px'}
        content='반납하기'
        style={{ width: '70%', marginTop: '10%' }}
        shadow={false}
        onClick={() => {
          console.log(paymentId);
          handleReturnBattery(paymentId);
          setIsModalOpen(false);
          // openSnackBar('반납이 완료되었습니다.');

          // target.style.display = 'none';
        }}
      />
    </S.ContentWrapper>
  );
};

export default Return;
