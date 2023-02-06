import convertDate2ReadableString from '@/components/@helper/utils/convertDate2ReadableString';

import * as S from './Content.style';

type DateBoxProps = {
  type?: string;
  startTime?: string;
  returnTime?: string;
  border?: boolean;
  fontSize?: string | number;
};

const DateBox = ({
  startTime,
  returnTime,
  border = false,
  fontSize,
  type,
}: DateBoxProps) => {
  return (
    <S.DateContainer>
      {startTime && (
        <div className='flex-center'>
          <S.DateStatus style={{ fontSize }}>대여</S.DateStatus>
          <span>{convertDate2ReadableString(startTime)}</span>
        </div>
      )}
      {border && <span className='border'></span>}
      {returnTime && (
        <div className='flex-center'>
          <S.DateStatus style={{ fontSize }}>
            {type ? type : '반납'}
          </S.DateStatus>
          <span>{convertDate2ReadableString(returnTime)}</span>
        </div>
      )}
    </S.DateContainer>
  );
};

export default DateBox;
