import { ShadowButton } from '@/components/@commons';
import useCancelPayment from '@/hooks/Orders/useCancelBattery';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options';

const Cancel = ({
  startTime,
  returnTime,
  setIsModalOpen,
  paymentId,
  battery,
}) => {
  const { handleCancelPayment } = useCancelPayment();
  const totalPrice =
    ((battery.price + battery.defaultPrice) *
      (new Date(returnTime).getTime() - new Date(startTime).getTime())) /
    (1000 * 60);

  return (
    <S.ContentWrapper>
      <ModalHeader title='예약 취소하기' />
      <S.ReturnDateContainer>
        <S.Border />
        <DateBox startTime={startTime} fontSize='20px' />
        <S.Border />
        <DateBox returnTime={returnTime} fontSize='20px' />
      </S.ReturnDateContainer>
      <ShadowButton
        padding={'10px 5px'}
        content='예약 취소하기'
        style={{ width: '70%', marginTop: '10%' }}
        shadow={false}
        onClick={() => {
          handleCancelPayment(paymentId, totalPrice);
          setIsModalOpen(false);
        }}
      />
    </S.ContentWrapper>
  );
};

export default Cancel;
