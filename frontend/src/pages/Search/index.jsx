import { ROUTES } from '@/constants';
import { useCheckValidReserveTable, useGetAllStations } from '@/hooks';
import useGetFilteredStationsBySetTime from '@/hooks/stations/useGetFilteredStationsBySetTime';

import { PageWrapper } from '../../components/@commons';
import SearchPage from '../../components/Search/SearchPage';

const Search = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const { stations } = useGetAllStations();
  const { filteredStations } = useGetFilteredStationsBySetTime();

  return (
    <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
      {startPoint !== undefined && endPoint !== undefined ? (
        <SearchPage stations={filteredStations} />
      ) : (
        <SearchPage stations={stations} />
      )}
    </PageWrapper>
  );
};

export default Search;
