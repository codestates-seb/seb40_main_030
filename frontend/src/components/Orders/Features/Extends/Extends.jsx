// import { useSearchParams } from 'react-router-dom';

import DateBox from '../Content/DateBox';
import * as S from './Extends.style';

const Extends = () => {
  // const [searchParams] = useSearchParams();

  return (
    <S.ContentWrapper>
      <DateBox />
    </S.ContentWrapper>
  );
};
export default Extends;
