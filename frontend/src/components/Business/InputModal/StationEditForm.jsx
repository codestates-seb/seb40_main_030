import { useForm } from 'react-hook-form';

import useDelStation from '../../../hooks/Business/useDelStation';
import useEditStation from '../../../hooks/Business/useEditStation';
import * as S from './StationEditForm.style';

const StationEditForm = ({
  openSnackBar,
  closeModalHandler,
  selectedStationInfo,
}) => {
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

  const onValidEditHandler = (data) => {
    const editBody = { ...data, location: selectedStationInfo.location };

    editMutate([selectedStationInfo.stationId, editBody]);
    openSnackBar('수정되었습니다');
    closeModalHandler(false);
  };
  const onValidDeleteHandler = () => {
    deleteMutate(selectedStationInfo.stationId);
    openSnackBar('삭제되었습니다');
    closeModalHandler(false);
  };

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  return (
    <>
      <S.EditModalContainer>
        <form onKeyDown={(e) => checkKeyDown(e)}>
          <div className='input-container'>
            <label htmlFor='name'>주유소이름</label>
            <input
              className='data-input'
              id='name'
              type='text'
              placeholder='주유소 이름을 입력하세요'
              {...register('name', {
                required: '필수입력입니다',
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
              })}
            />
          </div>
          <div className='error-box'>{errors?.capacity?.message}</div>
          <div className='input-container'>
            <label htmlFor='phone'>전화번호</label>
            <input
              className='data-input'
              id='phone'
              placeholder='전화번호를 입력하세요'
              {...register('phone', {
                required: '필수입력입니다',
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
    </>
  );
};

export default StationEditForm;
