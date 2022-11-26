import * as S from './Category.style';

const Category = () => {
  return (
    <S.Header>
      <S.CategoryButton>예약중</S.CategoryButton>
      <S.CategoryButton>사용중</S.CategoryButton>
      <S.CategoryButton>과거 내역</S.CategoryButton>
    </S.Header>
  );
};

export default Category;
