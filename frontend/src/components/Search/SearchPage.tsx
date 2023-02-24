import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { Content } from '@/@types';
import { ShadowButton, SnackBar } from '@/components/@common';
import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar, useGetAllStations } from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

import SearchBar from './SearchBar/SearchBar';

function SearchPage() {
  const { data: stations } = useGetAllStations();
  const { isActive, message, openSnackBar } = useSnackBar();
  const [locationInfo, setLocationInfo] = useState<Partial<Content>>({});
  const navigate = useNavigate();
  const setLocation = useSetRecoilState(currentLocationState);

  return (
    <>
      <div>
        <SearchBar stations={stations} setLocationInfo={setLocationInfo} />
        {Object.keys(locationInfo)?.length !== 0 && (
          <ShadowButton
            content={`${locationInfo?.name}으로 이동`}
            style={{ marginTop: 100, width: '100%' }}
            onClick={() =>
              Object.keys(locationInfo)?.length !== 0
                ? (setLocation(locationInfo?.location),
                  navigate(ROUTES.HOME.PATH))
                : openSnackBar(MESSAGE.KEYWORD_NOT_PROVIDED)
            }
          />
        )}
      </div>
      <SnackBar isActive={isActive} message={message} />
    </>
  );
}

export default SearchPage;
