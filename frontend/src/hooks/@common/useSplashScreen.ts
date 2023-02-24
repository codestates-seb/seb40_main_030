import { useEffect, useState } from 'react';

const SESSION_STORAGE_KEY = 'isSplashed';

const useSplashScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const isSplashed = sessionStorage.getItem(SESSION_STORAGE_KEY);

  useEffect(() => {
    if (isSplashed === null) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      }, 3500);
    } else {
      setLoading(false);
    }
  }, []);

  return { isLoading, isSplashed };
};

export default useSplashScreen;
