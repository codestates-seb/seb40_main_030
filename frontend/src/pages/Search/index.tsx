import { ROUTES } from '@/constants';
import {
  useCheckDateFixed,
  useGetAllStations,
  useGetFilteredStation,
} from '@/hooks';

import { PageWrapper } from '@/components/@commons';
import SearchPage from '@/components/Search/SearchPage';

const Search = () => {
  const { isDateFixed } = useCheckDateFixed();
  const { data: stations } = useGetAllStations();
  const { data: filteredStations } = useGetFilteredStation();

  if (!stations) {
    return (
      <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
        <div></div>
      </PageWrapper>
    );
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
