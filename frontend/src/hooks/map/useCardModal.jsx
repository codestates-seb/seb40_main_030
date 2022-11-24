import { useState } from 'react';

const useCardModal = (initialMode = false) => {
  const [isOpen, setIsOpen] = useState(initialMode);

  const handleModal = (boolean) => setIsOpen(boolean);

  return { isOpen, handleModal };
};

export default useCardModal;
