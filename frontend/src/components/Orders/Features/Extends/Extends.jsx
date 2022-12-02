import Counter from '@/components/Home/Reservation/Counter/Counter';
import { useGetAvailableExtendPeriod } from '@/hooks';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Extends.style';

const Extends = ({ endTime, paymentsId }) => {
  const { data } = useGetAvailableExtendPeriod(paymentsId);
  const { possibleEndTime } = data;

  if (possibleEndTime) {
    const timeDifferenceInHour =
      (new Date(possibleEndTime)?.getTime() - new Date(endTime)?.getTime()) /
      (1000 * 60 * 60);

    return (
      <S.ContentWrapper>
        <span className='max-extend-time'>
          최대 연장가능 시간은{' '}
          {timeDifferenceInHour >= 24 ? 24 : timeDifferenceInHour}시간 입니다.
        </span>
        <ModalHeader title='배터리 대여기간 연장하기' />
        <DateBox endTime={endTime} fontSize='20px' />
        <S.DateSelectContainer>
          <Counter min={0} max={23} range={1} />
          <Counter min={0} max={50} range={10} />
        </S.DateSelectContainer>
        {/* 이부분은 반납 클릭했을때 바뀌도록 */}
        <S.ExtendedDate>예정 반납 시간</S.ExtendedDate>
        <DateBox endTime={'2022-12-03T20:30'} fontSize='20px' />
      </S.ContentWrapper>
    );
  }
};
export default Extends;
