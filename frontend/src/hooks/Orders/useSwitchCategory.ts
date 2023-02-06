import { useState } from 'react';

type CategoryTypes = 'bookings' | 'inuse' | 'history';

const useSwitchCategory = () => {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryTypes>('bookings');

  const handleSwitchCategory = (category: CategoryTypes) => {
    setCurrentCategory(category);
  };

  return { currentCategory, handleSwitchCategory };
};

export default useSwitchCategory;
