import StationStatus from '../Station/StationStatus';
import * as S from './StationFilter.style';

const StationFilter = ({ countList }) => {
  return (
    <>
      <S.StationFilterContainer>
        {countList.map((totalStateCnt, idx) => {
          const status =
            idx === 0 ? 'total' : idx === 1 ? true : idx === 2 ? false : null;
          return (
            <StationStatus
              key={idx}
              totalStateCnt={totalStateCnt}
              status={status}
            />
          );
        })}
      </S.StationFilterContainer>
    </>
  );
};

export default StationFilter;
