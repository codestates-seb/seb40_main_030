import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { navState } from '@/recoil/pagesState';

import { useCheckDateFixed } from '..';
import usePreviousValue from './usePrevious';

const useBottomSheet = () => {
  const [isOpen, setIsOpen] = useRecoilState(navState);
  const controls = useAnimation();
  const prevIsOpen = usePreviousValue(isOpen);
  const { isReservationCompleted } = useCheckDateFixed();

  const onDragEnd = (info) => {
    const shouldClose = info?.y > 20 || (info?.y >= 0 && info.point.y > 45);
    if (shouldClose) {
      controls.start('hidden');
      setIsOpen(false);
    } else {
      controls.start('visible');
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start('hidden');
    } else if (!prevIsOpen && isOpen) {
      controls.start('visible');
    }
  }, [controls, isOpen, prevIsOpen]);

  useEffect(() => {
    if (isReservationCompleted) {
      setIsOpen(false);
    }
  }, [isReservationCompleted]);

  return { onDragEnd, controls, setIsOpen, isOpen };
};

export default useBottomSheet;
