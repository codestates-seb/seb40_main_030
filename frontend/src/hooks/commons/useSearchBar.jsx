import { useCallback, useRef, useState } from 'react';

import ch2Pattern from '@/components/@helper/utils/ch2Pattern';

const useSearchBar = (stations) => {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filteredLocation, setFilteredLocation] = useState([]);

  const createFuzzyMatcher = (inputValue) => {
    setKeyword(inputValue);

    const pattern = inputValue.split('').map(ch2Pattern).join('.*?');

    return new RegExp(pattern);
  };

  const handleKeyword = useCallback(
    (keyword) => {
      if (!keyword.length) {
        setIsActive(!isActive);

        return;
      }

      const regex = createFuzzyMatcher(keyword);
      const resultData = stations.filter(
        (station) => regex.test(station.name),
        false,
      );

      setFilteredLocation(resultData);
      setIsActive(true);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keyword],
  );

  const handleAutoComplete = () => {
    setIsActive(false);
    setKeyword('');
    inputRef.current.value = '';
  };

  return {
    handleKeyword,
    handleAutoComplete,
    inputRef,
    filteredLocation,
    isActive,
  };
};

export default useSearchBar;
