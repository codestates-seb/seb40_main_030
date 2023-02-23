/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';

import { BatteryType } from '@/@types';
import { ShadowCard, ShadowButton, BatteryEmpty } from '@/components/@common';
import InputModal from '@/components/Business/InputModal/InputModal';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetInUseList } from '@/hooks';

import { ContentModal } from './Content.style';
import * as S2 from './Content.style';
import DateBox from './DateBox';
import Extends from '../Options/Extends';
import Return from '../Options/Return';

type InuseList = {
  battery: BatteryType;
  paymentId: number;
  returnTime: string;
};

function InUseList() {
  const [currentPayment, setCurrentPayment] = useState<number>();
  const [currentModal, setCurrentModal] = useState('');
  const { data: inUseList } = useGetInUseList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (inUseList.length === 0) {
    return <BatteryEmpty />;
  }

  const handleModal = (paymentId: number, type: string) => {
    setCurrentPayment(paymentId);
    setCurrentModal(type);
    setIsModalOpen(!isModalOpen);
  };

  return inUseList?.map(({ battery, paymentId, returnTime }: InuseList) => (
    // 예약 취소 / 반납 / 연장 버튼 scale 애니메이션
    <S.BatteryContainer key={paymentId}>
      <ShadowCard>
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
              content='반납할래요'
              style={{
                fontSize: 15,
                marginTop: 20,
                width: '80px',
                padding: '10px 5px',
              }}
              // 반납 확인 모달창 띄운 뒤 성공하면 snackbar
              onClick={() => handleModal(paymentId, 'return')}
            />
            <ShadowButton
              shadow={false}
              content='연장할래요'
              style={{
                fontSize: 15,
                marginTop: 20,
                width: '80px',
                padding: '10px 5px',
              }}
              onClick={() => handleModal(paymentId, 'extends')}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
      </ShadowCard>
      {currentPayment === paymentId && (
        <InputModal
          isModalOpen={isModalOpen}
          closeModalHandler={setIsModalOpen}
        >
          <ContentModal height={currentModal === 'return' ? '30%' : '60%'}>
            {currentModal === 'return' && (
              <Return
                returnTime={returnTime}
                setIsModalOpen={setIsModalOpen}
                paymentId={paymentId}
              />
            )}
            {currentModal === 'extends' && (
              <Extends
                returnTime={returnTime}
                paymentsId={paymentId}
                setIsModalOpen={setIsModalOpen}
              />
            )}
          </ContentModal>
        </InputModal>
      )}
    </S.BatteryContainer>
  ));
}

export default InUseList;
