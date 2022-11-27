import { useState } from 'react';
const useToggle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clickToggleHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return { isClicked, setIsClicked, clickToggleHandler };
};

export default useToggle;
