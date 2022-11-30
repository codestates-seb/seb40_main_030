import { AnimateSharedLayout } from 'framer-motion';

import { PageWrapper } from '@/components/@commons';
// import BottomNav from '@/components/@layout/BottomNav/BottomNav';
import BottomSheet from '@/components/@layout/BottomSheet/BottomSheet';
import { BookingList, Category } from '@/components/Orders';
import HistoryList from '@/components/Orders/Features/Content/HistoryList';
import InUseList from '@/components/Orders/Features/Content/InUseList';
// import Item from '@/components/Orders/Features/Content/Item';
import { ROUTES } from '@/constants';
import { useSwitchCategory } from '@/hooks';

const Orders = () => {
  const { currentCategory, handleSwitchCategory } = useSwitchCategory();
  // const imageHasLoaded = true;

  return (
    <PageWrapper title='대여 현황 확인' path={ROUTES.HOME.PATH}>
      <AnimateSharedLayout type='crossfade'>
        <Category
          currentCategory={currentCategory}
          handleSwitchCategory={handleSwitchCategory}
        />
        <div className='scrollable-component'>
          {currentCategory === 'bookings' ? (
            <BookingList />
          ) : currentCategory === 'inuse' ? (
            <InUseList />
          ) : currentCategory === 'history' ? (
            <HistoryList />
          ) : null}
          {/* 애니메이션 부분  */}
          {/* <AnimatePresence>
            {imageHasLoaded && <Item key='item' />}
          </AnimatePresence> */}
        </div>
        <BottomSheet>
          <div>예약공간</div>
        </BottomSheet>
        {/* <BottomNav /> */}
      </AnimateSharedLayout>
    </PageWrapper>
  );
};

export default Orders;
