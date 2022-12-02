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

  return (
    <PageWrapper title={'사장님'} path={'/'}>
      {clickPage === 'battery' ? (
        <BatteryContent
          openSnackBar={openSnackBar}
          clickPage={clickPage}
          // fill='#d6d9dc'
        />
      ) : (
        <StationContent openSnackBar={openSnackBar} clickPage={clickPage} />
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
