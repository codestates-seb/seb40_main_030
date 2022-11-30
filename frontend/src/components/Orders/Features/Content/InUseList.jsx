import { ShadowCard, ShadowButton } from '@/components/@commons';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetInUseList, useBottomSheet } from '@/hooks';

import DateBox from './DateBox';

const InUseList = () => {
  const { data: inUseList } = useGetInUseList();
  const { isOpen, setIsOpen } = useBottomSheet();

  return inUseList?.map(({ battery, paymentId, endTime }) => (
    // 예약 취소 / 반납 / 연장 버튼 scale 애니메이션
    <S.BatteryContainer key={paymentId}>
      <ShadowCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        <S.ProductWrapper>
          <S.ImageContainer>
            <S.BatteryImage
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
          </S.ImageContainer>

          <S.ProductInfoContainer>
            <DateBox endTime={endTime} />
            <ShadowButton
              noShadow={true}
              width='80px'
              padding='10px 5px'
              content='반납할래요'
              style={{ fontSize: 15, marginTop: 20 }}
              onClick={() => alert(`정말 반납하시겠습니까? 반납 시간 보여주기`)}
            />
            <ShadowButton
              noShadow={true}
              width='80px'
              padding='10px 5px'
              content='연장할래요'
              style={{ fontSize: 15, marginTop: 20 }}
              onClick={() => setIsOpen(!isOpen)}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
      </ShadowCard>
    </S.BatteryContainer>
  ));
};

export default InUseList;

// 연장 가능 버튼 클릭시 언제까지 연장 가능한지 ( 시간  )

// 연장 가능 시간은 endTime 부터 다음 예약의 30분 전 까지 ( possibleEndTime )
//  다이얼로 표현 ( endTime 부터 최대 24시간 까지 )

// endTime : 13시

// 연장하기 버튼 클릭시에 patch 요청 해당 페이먼츠
// 연장 횟수 ? -> 연장 횟수의 제한이 있을 수 있음 한번 이후의 연장은 ->  고객센터로
// extended : true
