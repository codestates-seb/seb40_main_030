import { useRoutes } from 'react-router-dom';
import PAGES from './pages';
import useKakaoCheckLogin from './hooks/Login/useKakaoCheckLogin';

const App = () => {
  const pages = useRoutes(PAGES);

  useKakaoCheckLogin();

  return pages;
};

export default App;
