import BatteryStatus from '../Battery/BatteryStatus';
import * as S from './Filter.style';

const Filter = ({ countList }) => {
  return (
    <>
      <S.FilterContainer>
        <BatteryStatus status='total' count={countList.total} />
        <BatteryStatus status={true} count={countList.available} />
        <BatteryStatus status={false} count={countList.unavailable} />
      </S.FilterContainer>
    </>
  );
};

export default Filter;
