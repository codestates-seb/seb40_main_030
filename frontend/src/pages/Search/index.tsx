import { PageWrapper } from '@/components/@common';
import SearchPage from '@/components/Search/SearchPage';
import { ROUTES } from '@/constants';

function Search() {
  return (
    <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
      <SearchPage />
    </PageWrapper>
  );
}

export default Search;
