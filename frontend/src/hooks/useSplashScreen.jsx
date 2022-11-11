import { useEffect, useState } from 'react';

const useSplashScreen = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return { isLoading };
};

export default useSplashScreen;
