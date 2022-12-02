import { PageWrapper, SnackBar } from '@/components/@commons';
import { BookingList, Category } from '@/components/Orders';
import HistoryList from '@/components/Orders/Features/Content/HistoryList';
import InUseList from '@/components/Orders/Features/Content/InUseList';
import { ROUTES } from '@/constants';
import { useSnackBar, useSwitchCategory } from '@/hooks';

const Orders = () => {
  const { currentCategory, handleSwitchCategory } = useSwitchCategory();
  const { isActive, message } = useSnackBar();

  return (
    <PageWrapper title='대여 현황 확인' path={ROUTES.HOME.PATH}>
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
      </div>
      <SnackBar isActive={isActive} message={message} />
      {/* <BottomNav /> */}
    </PageWrapper>
  );
};

export default Orders;
