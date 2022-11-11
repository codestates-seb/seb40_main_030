import { useEffect, useState } from 'react';

const useSplashScreen = (delay) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, []);

  return { isLoading };
};

export default useSplashScreen;
