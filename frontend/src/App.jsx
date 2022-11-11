import { useRoutes } from 'react-router-dom';
import PAGES from './pages';

const App = () => {
  const pages = useRoutes(PAGES);
  return pages;
};

export default App;
