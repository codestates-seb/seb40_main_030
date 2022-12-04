// import { useState } from 'react';

import * as S from './Category.style';

const Category = ({ currentCategory, handleSwitchCategory }) => {
  return (
    <S.Header>
      <S.CategoryButton
        className={currentCategory === 'bookings' && 'active'}
        onClick={() => handleSwitchCategory('bookings')}
      >
        예약중
      </S.CategoryButton>
      <S.CategoryButton
        className={currentCategory === 'inuse' && 'active'}
        onClick={() => handleSwitchCategory('inuse')}
      >
        사용중
      </S.CategoryButton>
      <S.CategoryButton
        className={currentCategory === 'history' && 'active'}
        onClick={() => handleSwitchCategory('history')}
      >
        과거내역
      </S.CategoryButton>
    </S.Header>
  );
};

export default Category;
