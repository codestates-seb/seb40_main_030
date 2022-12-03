import { useState } from 'react';

import { login } from '@/apis/auth';
import NavigationBar from '@/components/Business/Nav/NavigationBar';

import PageWrapper from '../../components/@commons/PageWrapper/PageWrapper';
import SnackBar from '../../components/@commons/SnackBar/SnackBar';
import useToggle from '../../hooks/Business/useToggle';
import useSnackBar from '../../hooks/commons/useSnackBar';
import BatteryContent from './BatteryContent';
import StationContent from './StationContent';

const Business = () => {
  const { openSnackBar, isActive, message } = useSnackBar();

  const {
    clickPage,
    SelectStationModeHandler,
    SelectBatteryHandler,
    SelectAddModeHandler,
  } = useToggle();

  const [isSelectedBattery, setIsSelectedBattery] = useState([
    true,
    false,
    false,
    false,
  ]);
  const [isSelectedStation, setIsSelectedStation] = useState([
    true,
    false,
    false,
  ]);
  login().then((res) => console.log(res.data.split(' ')[1])); //로긴 테스트

  return (
    <PageWrapper title={'사장님'} path={'/'}>
      {clickPage === 'battery' ? (
        <BatteryContent
          isSelectedBattery={isSelectedBattery}
          setIsSelectedBattery={setIsSelectedBattery}
          openSnackBar={openSnackBar}
          clickPage={clickPage}
        />
      ) : (
        <StationContent
          isSelectedStation={isSelectedStation}
          setIsSelectedStation={setIsSelectedStation}
          openSnackBar={openSnackBar}
          clickPage={clickPage}
        />
      )}
      <NavigationBar
        clickPage={clickPage}
        SelectBatteryHandler={SelectBatteryHandler}
        SelectStationModeHandler={SelectStationModeHandler}
        SelectAddModeHandler={SelectAddModeHandler}
      />
      <SnackBar isActive={isActive} message={message} />
    </PageWrapper>
  );
};

export default Business;
