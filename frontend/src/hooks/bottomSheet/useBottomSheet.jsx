import { useEffect, useRef } from 'react';
import { MAX_Y, MIN_Y } from '../../constants';

const useBottomSheet = () => {
  const sheetRef = useRef(null);
  const contentRef = useRef(null);

  if (!sheetRef || !contentRef) {
    return;
  }

  const metrics = useRef({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none', // 'none' | 'down' | 'up'
    },
    isContentAreaTouched: false,
  });

  // Touch Event Handler 등록
  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;

      // 바텀 시트에서 컨텐으 영역이 아닌 부분 터치시에는 항상 바텀시트를 움직임
      if (!isContentAreaTouched) {
        return true;
      }

      // 바텀시트가 올라와있는 상태가 아닌때 컨텐츠 영역 터치시에 바텀시트 움직이는것이 자연스러움
      if (sheetRef.current.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }

      if (touchMove.movingDirection === 'down') {
        // 스크롤을 더 이상 올릴 것이 없다면, 바텀시트를 움직이는 것이 자연스럽습니다.
        // Safari 에서는 bounding 효과 때문에 scrollTop 이 음수가 될 수 있습니다. 따라서 0보다 작거나 같음 (<=)으로 검사합니다.
        return contentRef.current.scrollTop <= 0;
      }

      return false;
    };

    // getBoundingClientRect() => dom element 의 현재 위치 제공

    const handleTouchStart = (e) => {
      const { touchStart } = metrics.current;

      touchStart.sheetY = sheetRef.current.getBoundingClientRect().y;
      // touchEvent 감지
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      // 터치의 움직임으로 구분
      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = 'down';
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = 'up';
      }

      if (canUserMoveBottomSheet()) {
        e.preventDefault();

        // 터치 시작점에서 현재 터치 포인트까지의 변화된 y값
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        // nextSheetY 는 MIN_Y 와 MAX_Y 사이의 값으로 clamp

        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        }

        if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }

        // sheet 위치 갱신
        sheetRef.current.style.setProperty(
          'transform',
          `translateY(${nextSheetY - MAX_Y}px)`
        );
      } else {
        // 컨텐츠를 스크롤하는 동안에는 body가 스크롤되는 것을 막습니다

        document.body.style.overflowY = 'hidden';
      }
    };

    const handleTouchEnd = (e) => {
      const { touchMove } = metrics.current;

      document.body.style.overflowY = 'auto';

      // Snap Animation
      const currentSheetY = sheetRef.current.getBoundingClientRect().y;

      // MIN_TOP의 값을 찾아야함
      if (currentSheetY !== 400) {
        if (touchMove.movingDirection === 'down') {
          sheetRef.current.style.setProperty('transform', 'translateY(0)');
        }

        if (touchMove.movingDirection === 'up') {
          sheetRef.current.style.setProperty(
            'transform',
            `translateY(${MIN_Y - MAX_Y}px)`
          );
        }
      }

      // metrics 초기화.
      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
        isContentAreaTouched: false,
      };
    };

    sheetRef.current.addEventListener('touchstart', handleTouchStart);
    sheetRef.current.addEventListener('touchmove', handleTouchMove);
    sheetRef.current.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheetRef.current.addEventListener('touchstart', handleTouchStart);
      sheetRef.current.addEventListener('touchmove', handleTouchMove);
      sheetRef.current.addEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };

    contentRef.current.addEventListener('touchstart', handleTouchStart);

    return () =>
      contentRef.current.addEventListener('touchstart', handleTouchStart);
  }, []);

  return { sheetRef, contentRef };
};

export default useBottomSheet;
