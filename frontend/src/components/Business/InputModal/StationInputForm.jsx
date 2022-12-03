import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSearchMap } from '@/hooks';

import useAddStation from '../../../hooks/Business/useAddStation';
import * as S from './InputModal.style';

const StationInputForm = ({ openSnackBar }) => {
  const [location, setLocation] = useState();
  const { inputRef, locationData, setKeyword } = useSearchMap();
  const { addMutate, setIsAddMode } = useAddStation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });
  const onValidHandler = (data) => {
    openSnackBar('등록되었습니다');
    const body = {
      ...data,
      location,
      photoURL: 'www',
    };

    addMutate(body);
    reset();
    setKeyword('');
    inputRef.current.value = '';
    setIsAddMode(false);
  };
  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  const onClickHandler = (e, location) => {
    setLocation({ latitude: location.x, longitude: location.y });
    inputRef.current.value = e.target.innerText;
  };

  return (
    <>
      <S.InputModalContainer>
        <form
          onSubmit={handleSubmit(onValidHandler)}
          onKeyDown={(e) => checkKeyDown(e)}
        >
          <div className='input-container'>
            <label htmlFor='name'>주유소이름</label>
            <input
              className='data-input'
              id='name'
              type='text'
              placeholder='주유소 이름을 입력하세요'
              {...register('name', {
                required: '필수입력입니다',
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
                required: '필수입력입니다',
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
                required: '필수입력입니다',
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
              //   required: '필수입력입니다',
              // })}
            />
          </div>
          <div className='error-box'>{errors?.price?.message}</div>
          <div className='submit-container'>
            <input className='submit' type='submit' value='추가' />
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
    </>
  );
};

export default StationInputForm;
