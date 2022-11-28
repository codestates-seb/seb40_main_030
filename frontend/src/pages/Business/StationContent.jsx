import InputModal from '@/components/Business/InputModal/InputModal';
import StationInputForm from '@/components/Business/InputModal/StationInputForm';
import StationList from '@/components/Business/Station/StationList';
import StationManagement from '@/components/Business/StationManagement/StationManagement';

import StationFilter from '../../components/Business/Filter/StationFilter';
import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const StationContent = () => {
  const { stationInfo } = useGetStationList();

  return (
    <>
      <InputModal name={'station'}>
        <StationInputForm stationList={stationInfo.stationList} />
      </InputModal>
      <S.BodyWrapper>
        <StationManagement />
        <StationFilter countList={stationInfo.countList} />
        <StationList stationList={stationInfo.stationList} />
      </S.BodyWrapper>
    </>
  );
};

export default StationContent;
