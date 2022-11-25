import { useForm } from 'react-hook-form';

const InputForm = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor='capacity'>용 량</label>
        <input
          id='capacity'
          placeholder='배터리 용량을 입력하세요'
          {...register('capacity')}
        />
      </div>
      <div>
        <label htmlFor='price'>금 액</label>
        <input
          id='price'
          placeholder='대여 금액을 입력하세요'
          {...register('price', { required: true })}
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
