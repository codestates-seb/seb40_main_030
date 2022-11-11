import { useRoutes } from 'react-router-dom';
import PAGES from './pages';

const App = () => {
  console.log('aa');
  const pages = useRoutes(PAGES);
  return pages;
};

export default App;
