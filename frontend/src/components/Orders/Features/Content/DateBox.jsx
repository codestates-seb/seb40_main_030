import convertDate2ReadableString from '@/components/@helper/utils/convertDate2ReadableString';

import * as S from './Content.style';

const DateBox = ({ startTime, endTime, border = false }) => {
  return (
    <S.DateContainer>
      {startTime && (
        <div className='flex-center'>
          <S.DateStatus>대여</S.DateStatus>
          <span>{convertDate2ReadableString(startTime)}</span>
        </div>
      )}
      {border && <span className='border'></span>}
      {endTime && (
        <div className='flex-center'>
          <S.DateStatus>반납</S.DateStatus>
          <span>{convertDate2ReadableString(endTime)}</span>
        </div>
      )}
    </S.DateContainer>
  );
};

export default DateBox;
