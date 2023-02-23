import * as S from './Category.style';

type CategoryTypes = 'bookings' | 'inuse' | 'history';

const CATEGORY_LIST = {
  BOOKING: 'bookings',
  IN_USE: 'inuse',
  HISTORY: 'history',
};

function Category({
  currentCategory,
  handleSwitchCategory,
}: {
  currentCategory: CategoryTypes;
  handleSwitchCategory: (category: CategoryTypes) => void;
}) {
  return (
    <S.Header>
      <S.CategoryButton
        className={
          currentCategory === CATEGORY_LIST.BOOKING ? 'active' : undefined
        }
        onClick={() => handleSwitchCategory('bookings')}
      >
        예약중
      </S.CategoryButton>
      <S.CategoryButton
        className={
          currentCategory === CATEGORY_LIST.IN_USE ? 'active' : undefined
        }
        onClick={() => handleSwitchCategory('inuse')}
      >
        사용중
      </S.CategoryButton>
      <S.CategoryButton
        className={
          currentCategory === CATEGORY_LIST.HISTORY ? 'active' : undefined
        }
        onClick={() => handleSwitchCategory('history')}
      >
        과거내역
      </S.CategoryButton>
    </S.Header>
  );
}

export default Category;
