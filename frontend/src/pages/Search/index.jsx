import { ROUTES } from '@/constants';
import { useGetAllStations } from '@/hooks';

import { PageWrapper } from '../../components/@commons';
import SearchPage from '../../components/Search/SearchPage';

const Search = () => {
  const { stations } = useGetAllStations();

  return (
    <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
      <SearchPage stations={stations} />
    </PageWrapper>
  );
};

export default Search;
