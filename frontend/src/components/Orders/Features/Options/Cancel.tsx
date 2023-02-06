import { ShadowButton } from '@/components/@commons';
import { useCancelPayment, useCancelMockPayment } from '@/hooks';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options.style';

const Cancel = ({
  startTime,
  returnTime,
  setIsModalOpen,
  currentPayment,
  setCurrentPayment,
  paymentId,
}: {
  startTime: string;
  returnTime: string;
  setIsModalOpen: (arg: boolean) => void;
  currentPayment: null | number;
  setCurrentPayment: any;
  paymentId: number;
}) => {
  const { handleCancelPayment } = useCancelPayment();
  const { handleCancelMockPayment } = useCancelMockPayment();

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
          if (paymentId >= 1 && paymentId <= 7) {
            handleCancelMockPayment(paymentId);
          }
          handleCancelPayment(currentPayment);
          setCurrentPayment(null);
          setIsModalOpen(false);
        }}
      />
    </S.ContentWrapper>
  );
};

export default Cancel;
