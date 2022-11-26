import { useForm } from 'react-hook-form';

import useSnackBar from '../../../hooks/commons/useSnackBar';
import SnackBar from '../../@commons/SnackBar/SnackBar';

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { openSnackBar, isActive, message } = useSnackBar();

  const onValidHandler = (data) => {
    const message = '유효성이 일치합니다';
    openSnackBar(message);
  };
  console.log(errors);
  const onInvalidHandler = (errors) => {
    console.log(errors.capacity);
    const message = `${
      errors.capacity ? `capacity : ${errors.capacity.message}` : ''
    } ${errors.price ? `price : ${errors.price.message}` : ''}`;
    openSnackBar(message);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValidHandler, onInvalidHandler)}>
        <div>
          <label htmlFor='capacity'>용 량</label>
          <input
            id='capacity'
            type='number'
            placeholder='배터리 용량을 입력하세요'
            {...register('capacity', {
              required: '필수로 입력하세요.',
              min: { value: 1, message: '1이상 숫자를 입력하세요' },
              max: { value: 9999, message: '9999이하 숫자를 입력하세요.' },
            })}
          />
        </div>
        <div>
          <label htmlFor='price'>금 액</label>
          <input
            id='price'
            type='number'
            placeholder='대여 금액을 입력하세요'
            {...register('price', {
              required: '필수로 입력하세요.',
              minLength: { value: 4, message: '4개 이상입력하세요' },
            })}
          />
        </div>
        <div>
          <label htmlFor='station'>주유소</label>
          <select {...register('station')}>
            <option value='1번주유소'>1번주유소</option>
            <option value='2번주유소'>2번주유소</option>
            <option value='3번주유소'>3번주유소</option>
            <option value='3번주유소'>4번주유소</option>
            <option value='3번주유소'>5번주유소</option>
          </select>
        </div>
        <input type='submit' />
      </form>
      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default InputForm;

// {
//   "capacity":"50000mA",
//   "status":true,
//   "price":25000,
//   "photoURL":"http://asdfqwer111",
//   "stationId":1
// }
