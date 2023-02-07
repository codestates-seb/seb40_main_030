import { ROUTES } from '@/constants';
import { useCheckDateFixed, useGetAllStations } from '@/hooks';
import useGetFilteredStation from '@/hooks/stations/useGetFilteredStation';

import { PageWrapper } from '../../components/@commons';
import SearchPage from '../../components/Search/SearchPage';
import useSnackBar from '../../hooks/commons/useSnackBar';
import MESSAGE from '../../constants/snackBar';

const Search = () => {
  const { isDateFixed } = useCheckDateFixed();
  const { data: stations, isLoading } = useGetAllStations();
  const { data: filteredStations } = useGetFilteredStation();
  const { openSnackBar } = useSnackBar();

  if (!stations || isLoading) {
    openSnackBar(MESSAGE.STATION_DATA_LOADING);
    return;
  }

  return (
    <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
      {isDateFixed ? (
        <SearchPage stations={filteredStations} />
      ) : (
        <SearchPage stations={stations} />
      )}
    </PageWrapper>
  );
};

export default Search;
