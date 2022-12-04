import { useEffect, useState } from 'react';

const useSplashScreen = () => {
  // 세션 스토리지에 splash 유무 를 저장해서 탭을 닫고 열때는 다시 로딩화면을 보여줄 수 있게 함
  const [isLoading, setLoading] = useState(false);
  const isSplashed = sessionStorage.getItem('isSplashed');

  useEffect(() => {
    if (isSplashed === null) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('isSplashed', true);
      }, 3500);
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, isSplashed };
};

export default useSplashScreen;
