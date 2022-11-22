import BatteryStatus from '../Battery/BatteryStatus';
import * as S from './Filter.style';

const Filter = () => {
  return (
    <>
      <S.FilterContainer>
        <BatteryStatus count={17} />
        <BatteryStatus status={true} count={12} />
        <BatteryStatus status={false} count={5} />
      </S.FilterContainer>
    </>
  );
};

export default Filter;
