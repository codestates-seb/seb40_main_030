// commons
import {
  useCancelMockPayment,
  useCancelPayment,
} from '@/hooks/Orders/useCancelBattery';
import useGetFilteredStation from '@/hooks/stations/useGetFilteredStation';
import useGetStationsByRegion from '@/hooks/stations/useGetStationsByRegion';

import useMediaQuery from './@common/useMediaQuery';
import useSearchBar from './@common/useSearchBar';
import useSnackBar from './@common/useSnackBar';
import useSplashScreen from './@common/useSplashScreen';
import useBottomSheet from './bottomSheet/useBottomSheet';
import usePreviousValue from './bottomSheet/usePrevious';
// maps
import useOauthLoginCheck from './Login/useOauthLoginCheck';
import useCardModal from './map/useCardModal';
import useCurrentAddress from './map/useCurrentAddress';
import useKakaoMap from './map/useKakaoMap';
import useSearchMap from './map/useSearchMap';
import useTimeDifference from './map/useTimeDifference';
import useWatchLocation from './map/useWatchLocation';
// reservation
import useExtendBookingPeriod from './Orders/useExtendBookingPeriod';
import useGetAvailableExtendPeriod from './Orders/useGetAvailableExtendPeriod';
import useGetBookingList from './Orders/useGetBookingList';
import useGetHistoryList from './Orders/useGetHistoryList';
import useGetInUseList from './Orders/useGetInUseList';
import useSwitchCategory from './Orders/useSwitchCategory';
import useCalendar from './reservation/useCalendar';
import useCheckDateFixed from './reservation/useCheckDateFixed';
import useCheckValidReserveTable from './reservation/useCheckValidReserveTable';
import useCounter from './reservation/useCounter';
import useExtendReservation from './reservation/useExtendReservation';
import useGetBatteryBySetTime from './reservation/useGetBatteryBySetTIme';
import useReservation from './reservation/useReservation';
import useSingleDateReservation from './reservation/useSingleDateReservation';
import useUndoReservation from './reservation/useUndoReservation';

// stations
import useGetAllStations from './stations/useGetAllStations';
import useGetFilteredStationsBySetTime from './stations/useGetFilteredStationsBySetTime';

export { useGetAllStations };

export {
  useBottomSheet,
  usePreviousValue,
  useSnackBar,
  useMediaQuery,
  useSplashScreen,
  useSearchBar,
};

export {
  useCurrentAddress,
  useKakaoMap,
  useTimeDifference,
  useWatchLocation,
  useSearchMap,
  useCardModal,
  useOauthLoginCheck,
};

export {
  useCalendar,
  useCheckValidReserveTable,
  useCounter,
  useReservation,
  useSingleDateReservation,
  useUndoReservation,
  useCheckDateFixed,
  useGetAvailableExtendPeriod,
  useExtendReservation,
  useExtendBookingPeriod,
  useGetFilteredStationsBySetTime,
  useCancelPayment,
  useCancelMockPayment,
  useGetFilteredStation,
  useGetBatteryBySetTime,
  useGetStationsByRegion,
};

export {
  useSwitchCategory,
  useGetBookingList,
  useGetInUseList,
  useGetHistoryList,
};
