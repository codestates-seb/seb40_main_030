import { PageWrapper, SnackBar } from '@/components/@commons';
// import BottomNav from '@/components/@layout/BottomNav/BottomNav';
import BottomSheet from '@/components/@layout/BottomSheet/BottomSheet';
import HorizontalDatePicker from '@/components/Home/Reservation/Calendar/HorizontalDatePicker';
import Counter from '@/components/Home/Reservation/Counter/Counter';
import { BookingList, Category } from '@/components/Orders';
import HistoryList from '@/components/Orders/Features/Content/HistoryList';
import InUseList from '@/components/Orders/Features/Content/InUseList';
// import Item from '@/components/Orders/Features/Content/Item';
import { ROUTES } from '@/constants';
import { useSnackBar, useSwitchCategory } from '@/hooks';

const Orders = () => {
  const { currentCategory, handleSwitchCategory } = useSwitchCategory();
  const { isActive, message } = useSnackBar();
  // const imageHasLoaded = true;

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
        {/* 애니메이션 부분  */}
        {/* <AnimatePresence>
            {imageHasLoaded && <Item key='item' />}
          </AnimatePresence> */}
      </div>
      <BottomSheet>
        <span style={{ fontSize: 20 }}>예시안</span>
        <div>연장 설정 할 수 있는 모달로 변경 예정</div>
        <HorizontalDatePicker />
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Counter type='hours' min={1} max={24} range={1} />
          <Counter type='minutes' min={10} max={50} range={10} />
        </div>
      </BottomSheet>
      <SnackBar isActive={isActive} message={message} />
      {/* <BottomNav /> */}
    </PageWrapper>
  );
};

export default Orders;
