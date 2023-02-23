import { useCounter } from '@/hooks';

import * as S from './Counter.style';

type CounterProps = {
  type?: string;
  min: number;
  max: number;
  range: number;
  time: number;
};

function Counter({ type = '', min, max, range, time }: CounterProps) {
  const { handleTime, currentTime } = useCounter(type, min, max, range, time);

  return (
    <S.Container>
      <S.UpDownButton onClick={() => handleTime('up')}>+</S.UpDownButton>
      <S.NumberBox>
        <S.NumberInput value={currentTime} readOnly />
      </S.NumberBox>
      <S.UpDownButton onClick={() => handleTime('down')}>-</S.UpDownButton>
    </S.Container>
  );
}

export default Counter;
