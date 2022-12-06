import { useState } from 'react';

import { ShadowCard, ShadowButton, BatteryEmpty } from '@/components/@commons';
import InputModal from '@/components/Business/InputModal/InputModal';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetInUseList } from '@/hooks';

import Extends from '../Options/Extends';
import Return from '../Options/Return';
import { ContentModal } from './Content.style';
import * as S2 from './Content.style';
import DateBox from './DateBox';

const InUseList = () => {
  const [currentModal, setCurrentModal] = useState('');
  const { data: inUseList } = useGetInUseList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (inUseList.length === 0) {
    return <BatteryEmpty />;
  }

  return inUseList?.map(({ battery, paymentId, returnTime }) => (
    // 예약 취소 / 반납 / 연장 버튼 scale 애니메이션
    <S.BatteryContainer key={paymentId} id={paymentId}>
      <ShadowCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
      >
        <S.ProductWrapper>
          <S2.ImageContainer>
            <S2.BatteryImage
              src={battery.photoURL}
              alt='batteryImage'
              // onError={(e) => imageOnErrorHandler(e)}
            />
            <S.Capacity>
              {battery.capacity.toString().replace(PRICE_REGEX, ',')}
            </S.Capacity>
            <S.BatteryName style={{ marginTop: 10, fontSize: 18 }}>
              {battery.batteryName}
            </S.BatteryName>
          </S2.ImageContainer>
          <S.ProductInfoContainer>
            <DateBox returnTime={returnTime} />
            <ShadowButton
              shadow={false}
              width='80px'
              padding='10px 5px'
              content='반납할래요'
              style={{ fontSize: 15, marginTop: 20 }}
              // 반납 확인 모달창 띄운 뒤 성공하면 snackbar
              onClick={() => {
                setCurrentModal('return');
                setIsModalOpen(!isModalOpen);
              }}
            />
            <ShadowButton
              shadow={false}
              width='80px'
              padding='10px 5px'
              content='연장할래요'
              style={{ fontSize: 15, marginTop: 20 }}
              onClick={() => {
                setCurrentModal('extends');
                setIsModalOpen(!isModalOpen);
              }}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
      </ShadowCard>
      <InputModal isModalOpen={isModalOpen} closeModalHandler={setIsModalOpen}>
        <ContentModal height={currentModal === 'return' ? '30%' : '60%'}>
          {currentModal === 'return' ? (
            <Return
              returnTime={returnTime}
              setIsModalOpen={setIsModalOpen}
              paymentId={paymentId}
            />
          ) : currentModal === 'extends' ? (
            <Extends
              returnTime={returnTime}
              paymentsId={paymentId}
              setIsModalOpen={setIsModalOpen}
            />
          ) : null}
        </ContentModal>
      </InputModal>
    </S.BatteryContainer>
  ));
};

export default InUseList;
