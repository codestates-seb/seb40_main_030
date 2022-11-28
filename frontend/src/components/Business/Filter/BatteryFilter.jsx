import BatteryStatus from '../Battery/BatteryStatus';
import * as S from './BatteryFilter.style';

const BatteryFilter = ({ countList }) => {
  return (
    <>
      <S.BatteryFilterContainer>
        {countList.map((eachCount, idx) => {
          const state =
            idx === 0 ? 'total' : idx === 1 ? true : idx === 2 ? false : null;

          return <BatteryStatus key={idx} status={state} count={eachCount} />;
        })}
      </S.BatteryFilterContainer>
    </>
  );
};

export default BatteryFilter;
