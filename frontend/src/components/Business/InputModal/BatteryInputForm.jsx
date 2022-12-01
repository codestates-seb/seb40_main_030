import { useForm } from 'react-hook-form';

import useAddBattery from '../../../hooks/Business/useAddBattery';
import {
  removeDuplicatedBatteryName,
  removeDuplicatedStationName,
} from '../utils';
import * as S from './InputModal.style';

const BatteryInputForm = ({ openSnackBar, batteryList, stationList }) => {
  //removeDuplicatedBatteryName 추후 최적화 적용여부 확인

  const onlyOneBatteryNames = removeDuplicatedBatteryName(batteryList);
  const onlyOneStationNames = removeDuplicatedStationName(stationList);

  const { addMutate, setIsAddMode } = useAddBattery();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onValidHandler = (data) => {
    openSnackBar('등록되었습니다');

    const body = {
      status: true,
      ...data,
    };
    addMutate(body);
    reset();
    setIsAddMode(false);
  };

  const onInvalidHandler = (errors) => {
    // const message = `${
    //   errors.capacity ? `capacity : ${errors.capacity.message}` : ''
    // }
    // ${errors.price ? `price : ${errors.price.message}` : ''}
    // ${errors.stationId ? `stationId : ${errors.stationId.message}` : ''}`;
    openSnackBar('');
  };
  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  return (
    <>
      <S.InputModalContainer>
        <form
          onSubmit={handleSubmit(onValidHandler, onInvalidHandler)}
          onKeyDown={(e) => checkKeyDown(e)}
        >
          <div className='input-container'>
            <label htmlFor='capacity'>배터리용량</label>
            <input
              className='data-input'
              id='capacity'
              type='number'
              placeholder='배터리 용량을 입력하세요'
              {...register('capacity', {
                required: '필수입력입니다',
                min: { value: 1, message: '1이상 입력하세요' },
                max: { value: 999999, message: '999999이하 입력하세요' },
              })}
            />
          </div>
          <div className='error-box'>{errors?.capacity?.message}</div>
          <div className='input-container'>
            <label htmlFor='price'>배터리금액</label>
            <input
              className='data-input'
              id='price'
              type='number'
              placeholder='대여 금액을 입력하세요'
              {...register('price', {
                required: '필수입력입니다',
                min: { value: 1, message: '1이상 입력하세요' },
                max: { value: 999999999, message: '9999999999이하 입력하세요' },
              })}
            />
          </div>
          <div className='error-box'>{errors?.price?.message}</div>
          <div className='input-container'>
            <label htmlFor='defaultPrice'>기본금액</label>
            <input
              className='data-input'
              id='defaultPrice'
              type='number'
              placeholder='기본 금액을 입력하세요'
              {...register('defaultPrice', {
                required: '필수입력입니다',
                min: { value: 1, message: '1이상 입력하세요' },
                max: { value: 999999999, message: '9999999999이하 입력하세요' },
              })}
            />
          </div>
          <div className='error-box'>{errors?.price?.message}</div>
          <div className='input-container'>
            <label htmlFor='batteryName'>배터리종류</label>
            <select
              id='batteryName'
              className='data-input'
              defaultValue='default'
              {...register('batteryName', {
                required: true,
                validate: {
                  isValuedStation: (input) => {
                    return input !== 'default' || '필수선택입니다';
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
                    value={batteryName.batteryName}
                  >
                    {batteryName.batteryName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='error-box'>{errors?.stationId?.message}</div>
          <div className='input-container'>
            <label htmlFor='stationId'>주유소위치</label>
            <select
              className='data-input'
              defaultValue='default'
              {...register('stationId', {
                required: true,
                validate: {
                  isValuedStation: (input) => {
                    return input !== 'default' || '필수선택입니다';
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
            <input className='submit' type='submit' value='추가' />
          </div>
        </form>
      </S.InputModalContainer>
    </>
  );
};

export default BatteryInputForm;
