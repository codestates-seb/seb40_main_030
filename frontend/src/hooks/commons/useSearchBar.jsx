import { useCallback, useRef, useState } from 'react';

import ch2Pattern from '@/components/@helper/utils/ch2Pattern';
import { SEARCH_LOCATION_SUGGESTIONS } from '@/constants/common';

const useSearchBar = () => {
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
      const resultData = SEARCH_LOCATION_SUGGESTIONS.filter(
        (location) => regex.test(location),
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
