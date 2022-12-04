import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ShadowButton, SnackBar } from '@/components/@commons';
import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

import SearchBar from './SearchBar/SearchBar';

const SearchPage = ({ stations }) => {
  const { isActive, message, openSnackBar } = useSnackBar();
  const [locationInfo, setLocationInfo] = useState();
  const navigate = useNavigate();
  const setLocation = useSetRecoilState(currentLocationState);

  // const apiClient = axios.create({
  //   baseURL:
  //     'http://ec2-54-180-116-86.ap-northeast-2.compute.amazonaws.com:8080',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'content-type': 'application/json;charset=UTF-8',
  //     Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  //   },
  //   withCredentials: true,
  // });

  return (
    <>
      <div>
        <SearchBar stations={stations} setLocationInfo={setLocationInfo} />
        {locationInfo && (
          <ShadowButton
            content={`${locationInfo.name}으로 이동`}
            width='100%'
            style={{ marginTop: 100, width: '100%' }}
            onClick={() =>
              locationInfo
                ? (setLocation(locationInfo.location),
                  navigate(ROUTES.HOME.PATH))
                : openSnackBar(MESSAGE.KEYWORD_NOT_PROVIDED)
            }
          />
        )}
      </div>
      {/* <ShadowButton
        content='카카오 페이 요청'
        width='100%'
        style={{ marginTop: 100, width: '100%' }}
        onClick={(e) => {
          e.preventDefault();
          postKakao();
        }}
      />

      <form method='post' action='/kakaoPay'>
        <button>카카오페이로 결제하기</button>
      </form> */}

      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default SearchPage;
