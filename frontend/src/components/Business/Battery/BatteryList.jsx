import { useState } from 'react';

import InputModal from '@/components/Business/InputModal/InputModal';

import BatteryCount from '../BatteryManagement/BatteryCount';
import BatteryEditForm from '../InputModal/BatteryEditForm';
import {
  removeDuplicatedBatteryName,
  removeDuplicatedStationName,
} from '../utils';
import * as S from './Battery.style';
import BatteryCard from './BatteryCard';

const BatteryList = ({ openSnackBar, batteryList, stationList }) => {
  const [isEditState, setIsEditState] = useState(false);
  const [selectedBatteryInfo, setSelectedBatteryInfo] = useState({});

  const openModalHandler = (info) => {
    setSelectedBatteryInfo(info);
    setIsEditState(true);
  };

  const onlyOneBatteryNames = removeDuplicatedBatteryName(batteryList);
  const onlyOneStationNames = removeDuplicatedStationName(stationList);
  return (
    <>
      {isEditState && (
        <InputModal
          isActive={
            selectedBatteryInfo.status &&
            selectedBatteryInfo.reservationState === 0 &&
            isEditState
          }
          closeModalHandler={setIsEditState}
        >
          <BatteryEditForm
            setSelectedBatteryInfo={setSelectedBatteryInfo}
            openSnackBar={openSnackBar}
            closeModalHandler={setIsEditState}
            selectedBatteryInfo={selectedBatteryInfo}
            onlyOneBatteryNames={onlyOneBatteryNames}
            onlyOneStationNames={onlyOneStationNames}
          />
        </InputModal>
      )}

      <BatteryCount batteryCount={batteryList.length} />
      <S.BatteryListContainer>
        {batteryList.map((battery) => {
          return (
            <li key={battery.batteryId}>
              <BatteryCard
                openModalHandler={() =>
                  openModalHandler({
                    batteryId: battery.batteryId,
                    stationName: battery.stationName,
                    price: battery.price,
                    capacity: battery.capacity,
                    batteryName: battery.batteryName,
                    status: battery.status,
                    defaultPrice: battery.defaultPrice,
                    reservationState: battery.reservations.reservationState,
                  })
                }
                imgUrl={battery.photoURL}
                details={{
                  reservationState: battery.reservations.reservationState,
                  endTime: battery.reservations.endTime,
                  stationName: battery.stationName,
                  stationId: battery.stationId,
                  price: battery.price,
                  capacity: battery.capacity,
                  batteryName: battery.batteryName,
                }}
                status={battery.status}
                batteryId={battery.batteryId}
              />
            </li>
          );
        })}
      </S.BatteryListContainer>
    </>
  );
};

export default BatteryList;
