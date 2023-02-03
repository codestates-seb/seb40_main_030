import { useCounter } from '@/hooks';

import * as S from './Counter.style';

type Props = {
  type: string;
  min: number;
  max: number;
  range: number;
  externalRef?: any;
  time: number;
};

const Counter = ({ type, min, max, range, externalRef, time }: Props) => {
  const { inputRef, handleTime, currentTime } = useCounter(
    type,
    min,
    max,
    range,
    time,
  );

  return (
    <S.Container>
      <S.UpDownButton onClick={() => handleTime('up')}>+</S.UpDownButton>
      <S.NumberBox>
        <S.NumberInput
          ref={externalRef ? externalRef : inputRef}
          value={currentTime}
          readOnly
        />
      </S.NumberBox>
      <S.UpDownButton onClick={() => handleTime('down')}>-</S.UpDownButton>
    </S.Container>
  );
};

export default Counter;
