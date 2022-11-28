import { useForm } from 'react-hook-form';

import useAddBattery from '../../../hooks/Business/useAddBattery';
import useSnackBar from '../../../hooks/commons/useSnackBar';
import SnackBar from '../../@commons/SnackBar/SnackBar';
import {
  removeDuplicatedBatteryName,
  removeDuplicatedStationName,
} from '../utils';

const BatteryInputForm = ({ batteryList, stationList }) => {
  const onlyOneBatteryNames = removeDuplicatedBatteryName(batteryList);
  const onlyOneStationNames = removeDuplicatedStationName(stationList);
  // console.log('onlyOneBatteryNames', onlyOneBatteryNames);
  console.log('stationList', stationList);
  console.log('onlyOneStationNames', onlyOneStationNames);

  const { addMutate, setIsAddMode } = useAddBattery();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const { openSnackBar, isActive, message } = useSnackBar();

  const onValidHandler = (data) => {
    const message = '유효성이 일치합니다';
    openSnackBar(message);

    const body = {
      //mock서버로 보내는 임시 데이터
      status: true,
      // status: Math.random() > 0.5 ? true : false,
      photoURL: '',
      // batteryId: Math.random(),
      ...data,
      stationID: 1,
    };
    console.log('입력폼 data는', body);
    addMutate(body);
    reset();
    setIsAddMode(false);
  };

  const onInvalidHandler = (errors) => {
    const message = `${
      errors.capacity ? `capacity : ${errors.capacity.message}` : ''
    } 
    ${errors.price ? `price : ${errors.price.message}` : ''}
    ${errors.stationId ? `stationId : ${errors.stationId.message}` : ''}`;

    openSnackBar(message);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValidHandler, onInvalidHandler)}>
        <div>
          <label htmlFor='capacity'>배터리용량</label>
          <input
            className='data-input'
            id='capacity'
            type='number'
            placeholder='배터리 용량을 입력하세요'
            {...register('capacity', {
              required: '미입력',
              min: { value: 1, message: '1이상 입력하세요' },
            })}
          />
        </div>
        <div className='error-box'>{errors?.capacity?.message}</div>
        <div>
          <label htmlFor='price'>배터리금액</label>
          <input
            className='data-input'
            id='price'
            type='number'
            placeholder='대여 금액을 입력하세요'
            {...register('price', {
              required: '미입력',
              min: { value: 1, message: '1이상 입력하세요' },
            })}
          />
        </div>
        <div className='error-box'>{errors?.price?.message}</div>
        <div>
          <label htmlFor='batteryType'>배터리종류</label>
          <select
            defaultValue='default'
            {...register('batteryType', {
              required: true,
              validate: {
                isValuedStation: (input) => {
                  return input !== 'default' || '미입력';
                },
              },
            })}
          >
            <option value='default' disabled>
              선택
            </option>
            {onlyOneBatteryNames.map((batteryName) => {
              return (
                <option
                  key={batteryName.batteryId}
                  value={batteryName.batteryId}
                >
                  {batteryName.batteryName}
                </option>
              );
            })}
          </select>
        </div>
        <div className='error-box'>{errors?.stationId?.message}</div>
        <div>
          <label htmlFor='stationId'>주유소위치</label>
          <select
            defaultValue='default'
            {...register('stationId', {
              required: true,
              validate: {
                isValuedStation: (input) => {
                  return input !== 'default' || '미입력';
                },
              },
            })}
          >
            <option value='default' disabled>
              선택
            </option>
            {onlyOneStationNames.map((stationName) => {
              return (
                <option
                  key={stationName.stationId}
                  value={stationName.stationId}
                >
                  {stationName.stationName}
                </option>
              );
            })}
          </select>
        </div>
        <div className='error-box'>{errors?.stationId?.message}</div>
        <div className='submit-container'>
          <input className='submit' type='submit' />
        </div>
      </form>
      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default BatteryInputForm;

// {
//   "capacity":"50000mA",
//   "status":true,
//   "price":25000,
//   "photoURL":"http://asdfqwer111",
//   "stationId":1
// }
