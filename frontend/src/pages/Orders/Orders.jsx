import { PageWrapper } from '@/components/@commons';
// import BottomNav from '@/components/@layout/BottomNav/BottomNav';
import { BookingList, Category } from '@/components/Orders';
import HistoryList from '@/components/Orders/Features/Content/HistoryList';
import InUseList from '@/components/Orders/Features/Content/InUseList';
import { ROUTES } from '@/constants';
import { useSwitchCategory } from '@/hooks';

const Orders = () => {
  const { currentCategory, handleSwitchCategory } = useSwitchCategory();

  return (
    <PageWrapper title='대여 현황 확인' path={ROUTES.HOME.PATH}>
      <div className='scrollable-component'>
        <Category
          currentCategory={currentCategory}
          handleSwitchCategory={handleSwitchCategory}
        />
        {currentCategory === 'bookings' ? (
          <BookingList />
        ) : currentCategory === 'inuse' ? (
          <InUseList />
        ) : currentCategory === 'history' ? (
          <HistoryList />
        ) : null}
      </div>
      {/* <BottomNav /> */}
    </PageWrapper>
  );
};

export default Orders;
