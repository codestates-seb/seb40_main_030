import { useCallback, useRef, useState } from 'react';

import { Content } from '@/@types';
import { ch2Pattern } from '@/utils';

const useSearchBar = (stations?: Content[] | null) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filteredLocation, setFilteredLocation] = useState<
    Content[] | null | undefined
  >([]);

  const createFuzzyMatcher = (inputValue: string) => {
    setKeyword(inputValue);

    const pattern = inputValue.split('').map(ch2Pattern).join('.*?');

    return new RegExp(pattern);
  };

  const handleKeyword = useCallback(() => {
    if (!keyword.length) {
      setIsActive(!isActive);

      return;
    }

    const regex = createFuzzyMatcher(keyword);
    const resultData = stations?.filter(
      (station) => regex.test(station.name),
      false,
    );

    setFilteredLocation(resultData);
    setIsActive(true);
  }, [keyword]);

  const handleAutoComplete = () => {
    setIsActive(false);
    setKeyword('');

    if (inputRef.current) {
      inputRef.current.value = '';
    }
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
