import { ROUTES } from '@/constants';
import { useCheckDateFixed, useGetAllStations } from '@/hooks';
import useGetFilteredStation from '@/hooks/stations/useGetFilteredStation';

import { PageWrapper } from '../../components/@commons';
import SearchPage from '../../components/Search/SearchPage';

const Search = () => {
  const { isDateFixed } = useCheckDateFixed();
  const { stations } = useGetAllStations();
  const { filteredStations } = useGetFilteredStation();

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
