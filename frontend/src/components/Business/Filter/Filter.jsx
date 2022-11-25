import BatteryStatus from '../Battery/BatteryStatus';
import * as S from './Filter.style';

const Filter = ({ countList }) => {
  return (
    <>
      <S.FilterContainer>
        {countList.map((eachCount, idx) => {
          const state =
            idx === 0 ? 'total' : idx === 1 ? true : idx === 2 ? false : null;

          return <BatteryStatus key={idx} status={state} count={eachCount} />;
        })}
      </S.FilterContainer>
    </>
  );
};

export default Filter;
