import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { editStation } from '@/apis/admin';
import { useSearchMap } from '@/hooks';

import useAddStation from '../../../hooks/Business/useAddStation';
import useDelStation from '../../../hooks/Business/useDelStation';
import useEditStation from '../../../hooks/Business/useEditStation';
import useSnackBar from '../../../hooks/commons/useSnackBar';
import SnackBar from '../../@commons/SnackBar/SnackBar';
import * as S from './StationEditForm.style';

const StationEditForm = ({ closeModalHandler, selectedStationInfo }) => {
  const { editMutate } = useEditStation();
  const { deleteMutate } = useDelStation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: selectedStationInfo.stationName,
      details: selectedStationInfo.details,
      phone: selectedStationInfo.phone,
    },
  });
  const { openSnackBar, isActive, message } = useSnackBar();

  const onValidEditHandler = (data) => {
    const editBody = { ...data, location: selectedStationInfo.location };

    editMutate([selectedStationInfo.stationId, editBody]);
    closeModalHandler(false);
  };
  const onValidDeleteHandler = () => {
    deleteMutate(selectedStationInfo.stationId);
    closeModalHandler(false);
  };

  const onInvalidHandler = (errors) => {};

  return (
    <>
      <S.EditModalContainer>
        <form>
          <div className='input-container'>
            <label htmlFor='name'>주유소이름</label>
            <input
              className='data-input'
              id='name'
              type='text'
              placeholder='주유소 이름을 입력하세요'
              {...register('name', {
                min: { value: 1, message: '1이상 입력하세요' },
              })}
            />
          </div>
          <div className='error-box'>{errors?.capacity?.message}</div>
          <div className='input-container'>
            <label htmlFor='details'>상세설명</label>
            <input
              className='data-input'
              id='details'
              type='text'
              placeholder='상세 설명을 입력하세요'
              {...register('details', {
                min: { value: 1, message: '1이상 입력하세요' },
              })}
            />
          </div>
          <div className='error-box'>{errors?.capacity?.message}</div>
          <div className='input-container'>
            <label htmlFor='phone'>전화번호</label>
            <input
              className='data-input'
              id='phone'
              type='number'
              placeholder='전화번호를 입력하세요'
              {...register('phone', {
                min: { value: 1, message: '1이상 입력하세요' },
              })}
            />
          </div>
          <div className='error-box'>{errors?.price?.message}</div>
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
      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default StationEditForm;
