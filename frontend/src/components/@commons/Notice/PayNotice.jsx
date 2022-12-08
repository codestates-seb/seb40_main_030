import { useEffect } from 'react';

import { KakaoDeclined } from '@/assets';
import InputModal from '@/components/Business/InputModal/InputModal';
import { ContentModal } from '@/components/Orders/Features/Content/Content.style';
import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import { ShadowButton } from '..';

const PayNotice = ({ isModalOpen, setIsModalOpen }) => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const isNoticeRead = JSON.parse(localStorage.getItem('notice'));

  useEffect(() => {
    if (!isNoticeRead) {
      localStorage.setItem('notice', false);
    }
  }, [isNoticeRead]);

  return (
    <InputModal
      matches={matches}
      isModalOpen={isModalOpen}
      closeModalHandler={setIsModalOpen}
    >
      <ContentModal width='50%' height='60%'>
        <div style={{ position: 'relative', bottom: '60px' }}>공지사항</div>
        <span
          style={{
            fontSize: 25,
            color: 'red',
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          현재 카카오 포인트 점검중이므로
        </span>
        <span
          style={{
            fontSize: 25,
            color: 'red',
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          카카오 포인트를 제외한
        </span>
        <span
          style={{
            fontSize: 25,
            color: 'red',
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          카드 결제 부탁드립니다.
        </span>
        {/* <img src={KakaoDeclined} /> */}
        <ShadowButton
          shadow={false}
          width='80px'
          padding='10px 5px'
          content='확인했어요'
          style={{ fontSize: 18, marginTop: 20 }}
          onClick={() => {
            setIsModalOpen(false);
            localStorage.setItem('notice', true);
          }}
        />
      </ContentModal>
    </InputModal>
  );
};

export default PayNotice;
