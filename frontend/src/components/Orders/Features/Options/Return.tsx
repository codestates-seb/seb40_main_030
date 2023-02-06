import { ShadowButton } from '@/components/@commons';
import useReturnBattery from '@/hooks/Orders/useReturnBattery';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options.style';

const Return = ({
  returnTime,
  setIsModalOpen,
  paymentId,
}: {
  returnTime: string;
  setIsModalOpen: (arg: boolean) => void;
  paymentId: number;
}) => {
  const { handleReturnBattery } = useReturnBattery();

  return (
    <S.ContentWrapper>
      <ModalHeader title='배터리 반납하기' />
      <S.ReturnDateContainer>
        <S.Border />
        <DateBox returnTime={returnTime} fontSize='20px' />
        <S.Border />
        <DateBox
          returnTime={new Date().getTime().toString()}
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
          handleReturnBattery(paymentId);
          setIsModalOpen(false);
        }}
      />
    </S.ContentWrapper>
  );
};

export default Return;
