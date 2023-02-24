import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import { PageWrapper } from '@/components/@common';
import SearchPage from '@/components/Search/SearchPage';
import { ROUTES } from '@/constants';
import { useCheckDateFixed, useGetFilteredStation } from '@/hooks';

function Search() {
  const { isDateFixed } = useCheckDateFixed();
  // const { data: stations } = useGetAllStations();
  const { data: filteredStations } = useGetFilteredStation();

  // if (!stations) {
  //   return (
  //     <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
  //       <div />
  //     </PageWrapper>
  //   );
  // }

  useEffect(() => {
    console.log(filteredStations);
  }, []);

  return (
    <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
      {isDateFixed ? (
        <SearchPage stations={filteredStations} />
      ) : (
        <SearchPage stations={filteredStations} />
      )}
    </PageWrapper>
  );
}

export default Search;
