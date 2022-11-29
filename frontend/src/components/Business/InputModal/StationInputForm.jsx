import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSearchMap } from '@/hooks';

import useAddStation from '../../../hooks/Business/useAddStation';
import useSnackBar from '../../../hooks/commons/useSnackBar';
import SnackBar from '../../@commons/SnackBar/SnackBar';
import * as S from './InputModal.style';

const StationInputForm = () => {
  const [location, setLocation] = useState();
  const { inputRef, locationData, setKeyword } = useSearchMap();
  const { addMutate, setIsAddMode } = useAddStation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });
  const { openSnackBar, isActive, message } = useSnackBar();

  const onValidHandler = (data) => {
    const message = '유효성이 일치합니다';
    openSnackBar(message);
    const body = {
      ...data,
      location,
      photoURL: 'www',
    };

    console.log('입력폼 data는', body);
    addMutate(body);
    reset();
    setKeyword('');
    inputRef.current.value = '';
    setIsAddMode(false);
  };

  const onInvalidHandler = (errors) => {
    const message = `${errors.name ? `name : ${errors.name.message}` : ''} 
    ${errors.details ? `details : ${errors.details.message}` : ''}
    ${errors.phone ? `phone : ${errors.phone.message}` : ''}
    ${errors.location ? `location : ${errors.location.message}` : ''}`;
    openSnackBar(message);
    console.log('에러', errors);
  };

  const onClickHandler = (e, location) => {
    setLocation({ latitude: location.x, longitude: location.y });
    inputRef.current.value = e.target.innerText;
  };

  return (
    <>
      <S.InputModalContainer>
        <form onSubmit={handleSubmit(onValidHandler, onInvalidHandler)}>
          <div className='input-container'>
            <label htmlFor='name'>주유소이름</label>
            <input
              className='data-input'
              id='name'
              type='text'
              placeholder='주유소 이름을 입력하세요'
              {...register('name', {
                required: '미입력',
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
                required: '미입력',
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
                required: '미입력',
                min: { value: 1, message: '1이상 입력하세요' },
              })}
            />
          </div>
          <div className='error-box'>{errors?.price?.message}</div>

          <div className='input-container'>
            <label htmlFor='phone'>대여소검색</label>
            <input
              className='data-input'
              id='location'
              type='text'
              // onKeyPress={(e) => {
              //   if (e.key === 'Enter') {
              //     setKeyword(e.target.value);
              //   }
              // }}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              placeholder='대여소주소를 검색하세요'
              ref={inputRef}
              // {...register('location', {
              //   required: '미입력',
              //   min: { value: 1, message: '1이상 입력하세요' },
              // })}
              // ref={inputRef}
            />
          </div>
          <div className='error-box'>{errors?.price?.message}</div>
          <div className='submit-container'>
            <input className='submit' type='submit' />
          </div>
          <S.LocationListWrapper>
            <S.LocationListContainer>
              {locationData &&
                locationData.map((location, idx) => {
                  return (
                    <S.LocationContainer key={idx}>
                      <button
                        id='search'
                        onClick={(e) => {
                          onClickHandler(e, location);
                        }}
                      >
                        {location.address_name}
                      </button>
                      <label htmlFor='search'>{location.place_name}</label>
                    </S.LocationContainer>
                  );
                })}
            </S.LocationListContainer>
          </S.LocationListWrapper>
        </form>
      </S.InputModalContainer>
      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default StationInputForm;
