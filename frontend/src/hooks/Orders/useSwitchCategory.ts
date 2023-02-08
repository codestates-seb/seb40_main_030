import { useState } from 'react';

const useSwitchCategory = () => {
  const [currentCategory, setCurrentCategory] = useState('bookings');

  const handleSwitchCategory = (category: string) => {
    setCurrentCategory(category);
  };

  return { currentCategory, handleSwitchCategory };
};

export default useSwitchCategory;
