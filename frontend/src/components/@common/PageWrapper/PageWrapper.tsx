import { ReactNode, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowIcon } from '@/assets';
import { BatteryCharging } from '@/components/@common';
import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import * as S from './PageWrapper.style';

type Props = {
  title: string;
  path: string;
  loadingMessage?: string;
  loadingDelay?: number | string;
  children: ReactNode;
};

function PageWrapper({
  title,
  path,
  loadingMessage,
  loadingDelay,
  children,
}: Props) {
  const navigate = useNavigate();
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    <S.MotionWrapper
      transition={{ duration: 1 }}
      initial={{ opacity: 0.5, x: '100%' }}
      animate={{ opacity: 1, x: '0%', transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: '100%', transition: { duration: 0.5 } }}
      matches={matches}
    >
      <S.Header>
        <button
          type='button'
          className='button'
          onClick={() => navigate(path.toString())}
        >
          <ArrowIcon />
        </button>
        <S.Title>{title}</S.Title>
      </S.Header>
      <Suspense
        fallback={
          <BatteryCharging
            message={loadingMessage}
            chargingSpeed={loadingDelay}
          />
        }
      >
        {children}
      </Suspense>
    </S.MotionWrapper>
  );
}

export default PageWrapper;
