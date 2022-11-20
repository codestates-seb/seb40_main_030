import { useRoutes } from 'react-router-dom';
import PAGES from './pages';
import useKakaoCheckLogin from './hooks/Login/useKakaoCheckLogin';

const App = () => {
  const pages = useRoutes(PAGES);
  useKakaoCheckLogin();
  //privatetest 페이지 url을 입력하면 권한이 없어서 처음에 /login으로 간다.
  //isAuth 값이 true로 변경되고 재렌더링되어도 url은 /login이기때문에 /login 페이지가 재렌더링된다.
  return pages;
};

export default App;
