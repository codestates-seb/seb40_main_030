import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowIcon } from '@/assets';

import { BatteryCharging } from '..';
import * as S from './PageWrapper.style';

const PageWrapper = ({
  title,
  path,
  loadingMessage,
  loadingDelay,
  children,
}) => {
  const navigate = useNavigate();
  
  return (
    <S.MotionWrapper
      initial={{ opacity: 1, x: '100%', transition: { duration: 1 } }}
      animate={{ opacity: 1, x: '0%', transition: { duration: 0.5 } }}
      exit={{ opacity: 1, x: '100%', transition: { duration: 0.5 } }}
    >
      <S.Header>
        {/* path 는 뒤로가기를 눌렀을때 이동할 페이지를 의미 합니다. */}
        <div onClick={() => navigate(path)}>
          <ArrowIcon />
        </div>
        <S.Title>{title}</S.Title>
      </S.Header>
      <Suspense
        fallback={
          <BatteryCharging
            message={loadingMessage}
            BatteryCharging={loadingDelay}
          />
        }
      >
        {children}
      </Suspense>
    </S.MotionWrapper>
  );
};

export default PageWrapper;
