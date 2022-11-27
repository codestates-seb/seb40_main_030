import * as S from './SuccessList.style';

const SuccessList = ({ data }) => {
  console.log('List/SuccessList-> props data : ', data);
  return <S.SuccessListContainer>{data.totalPrice}</S.SuccessListContainer>;
};

export default SuccessList;
