import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useDelBattery from '../../../hooks/Business/useDelBattery';
import useEditBattery from '../../../hooks/Business/useEditBattery';
import * as S from './BatteryEditForm.style';
const BatteryEditForm = ({
  setSelectedBatteryInfo,
  openSnackBar,
  closeModalHandler,
  selectedBatteryInfo,
  onlyOneBatteryNames,
  onlyOneStationNames,
}) => {
  const { editMutate } = useEditBattery();
  const { deleteMutate } = useDelBattery();
  // useEffect(() => {
  //   setValue('capacity', selectedBatteryInfo.capacity);
  //   console.log('selectedBatteryInfo.capacity', selectedBatteryInfo.capacity);
  // }, []);

  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      capacity: parseInt(selectedBatteryInfo.capacity),
      price: selectedBatteryInfo.price,
      defaultPrice: selectedBatteryInfo.defaultPrice,
    },
  });

  const onValidEditHandler = (data) => {
    const body = {
      status: true,
      ...data,
    };
    console.log('수정 body', body);
    editMutate([selectedBatteryInfo.batteryId, body]);
    openSnackBar('수정되었습니다');
    closeModalHandler(false);
  };
  const onValidDeleteHandler = () => {
    deleteMutate(selectedBatteryInfo.batteryId);
    openSnackBar('삭제되었습니다');
    closeModalHandler(false);
  };

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };
  console.log('stationId', watch('stationId'));
  console.log('watch', watch());
  return (
    <S.EditModalContainer>
      <form onKeyDown={(e) => checkKeyDown(e)}>
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
            defaultValue={''}
            {...register('batteryName')}
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
            // defaultValue={}
            {...register('stationId')}
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
        <div className='button-container'>
          <button
            className='edit-button'
            onClick={handleSubmit(onValidEditHandler)}
          >
            수정
          </button>
          <button
            className='delete-button'
            onClick={handleSubmit(onValidDeleteHandler)}
          >
            삭제
          </button>
        </div>
      </form>
    </S.EditModalContainer>
  );
};

export default BatteryEditForm;
