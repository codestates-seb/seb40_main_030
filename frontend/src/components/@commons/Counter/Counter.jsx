import useCounter from '../../../hooks/useCounter';
import * as S from './Counter.style';

const Counter = ({ min, max, range }) => {
  const { inputRef, handleTime, currentTime } = useCounter(min, max, range);

  return (
    <S.Container>
      <S.UpDownButton onClick={() => handleTime('down')}>-</S.UpDownButton>
      <S.NumberBox>
        <S.NumberIndicator ref={inputRef} value={currentTime} readOnly />
      </S.NumberBox>
      <S.UpDownButton onClick={() => handleTime('up')}>+</S.UpDownButton>
    </S.Container>
  );
};

export default Counter;
