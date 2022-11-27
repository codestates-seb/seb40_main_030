import { useCounter } from '@/hooks';

import * as S from './Counter.style';

const Counter = ({ type, min, max, range }) => {
  const { inputRef, handleTime, currentTime } = useCounter(
    type,
    min,
    max,
    range,
  );

  return (
    <S.Container>
      <S.UpDownButton onClick={() => handleTime('up')}>+</S.UpDownButton>
      <S.NumberBox>
        <S.NumberInput ref={inputRef} value={currentTime} readOnly />
      </S.NumberBox>
      <S.UpDownButton onClick={() => handleTime('down')}>-</S.UpDownButton>
    </S.Container>
  );
};

export default Counter;
