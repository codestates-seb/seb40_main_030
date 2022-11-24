import { PageWrapper } from '../../components/@commons';
import SearchPage from '../../components/Search/SearchPage';

const Search = () => {
  return (
    <PageWrapper title='대여장소 검색하기' path={-1}>
      <SearchPage />
    </PageWrapper>
  );
};

export default Search;
