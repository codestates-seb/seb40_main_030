import InputModal from '@/components/Business/InputModal/InputModal';
import StationInputForm from '@/components/Business/InputModal/StationInputForm';
import StationList from '@/components/Business/Station/StationList';
import StationManagement from '@/components/Business/StationManagement/StationManagement';

import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const StationContent = () => {
  const { stationInfo } = useGetStationList();
  return (
    <>
      <InputModal name={'station'}>
        <StationInputForm />
      </InputModal>
      <S.BodyWrapper>
        <StationManagement />
        <div style={{ height: '65px' }}></div>
        <StationList stationList={stationInfo} />
      </S.BodyWrapper>
    </>
  );
};

export default StationContent;
