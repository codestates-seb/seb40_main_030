import { useState } from 'react';

import InputModal from '@/components/Business/InputModal/InputModal';

import StationEditForm from '../InputModal/StationEditForm';
import StationCount from '../StationManagement/StationCount';
import * as S from './Station.style';
import StationCard from './StationCard';

const StationList = ({ openSnackBar, stationList }) => {
  const [isEditState, setIsEditState] = useState(false);
  const [selectedStationInfo, setSelectedStationInfo] = useState({});

  const openModalHandler = (info) => {
    setIsEditState(true);
    setSelectedStationInfo(info);
  };

  return (
    <>
      {isEditState && (
        <InputModal
          isActive={
            selectedStationInfo.batteryCount > 0 ? true : false && isEditState
          }
          closeModalHandler={setIsEditState}
        >
          <StationEditForm
            openSnackBar={openSnackBar}
            closeModalHandler={setIsEditState}
            selectedStationInfo={selectedStationInfo}
          />
        </InputModal>
      )}
      <S.StationListWrapper>
        <StationCount count={`${stationList.length}개`} />
        <S.StationListContainer>
          {stationList.map((station) => {
            return (
              <li key={station.stationId}>
                <StationCard
                  openModalHandler={() =>
                    openModalHandler({
                      stationName: station.stationName,
                      phone: station.phone,
                      details: station.details,
                      stationId: station.stationId,
                      location: station.location,
                      batteryCount: station.batteryCount,
                    })
                  }
                  imgUrl={station.photoURL}
                  details={{
                    stationName: station.stationName,
                    phone: station.phone,
                    photoURL: station.photoURL,
                    details: station.details,
                  }}
                  batteryCount={station.batteryCount}
                  stationId={station.stationId}
                />
              </li>
            );
          })}
        </S.StationListContainer>
      </S.StationListWrapper>
    </>
  );
};

export default StationList;
