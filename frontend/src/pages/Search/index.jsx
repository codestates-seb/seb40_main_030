import { ROUTES } from '@/constants';
import { useCheckDateFixed, useGetAllStations } from '@/hooks';
import useGetFilteredStationsBySetTime from '@/hooks/stations/useGetFilteredStationsBySetTime';

import { PageWrapper } from '../../components/@commons';
import SearchPage from '../../components/Search/SearchPage';

const Search = () => {
  const { isDateFixed } = useCheckDateFixed();
  const { stations } = useGetAllStations();
  const { filteredStations } = useGetFilteredStationsBySetTime();

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
