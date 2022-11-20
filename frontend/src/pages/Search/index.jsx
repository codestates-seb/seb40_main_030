import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShadowButton } from '../../components/@commons';
import BottomNav from '../../components/@layout/BottomNav/BottomNav';
import SearchPage from '../../components/Search/SearchPage';

const Search = () => {
  const navigate = useNavigate();

  return <SearchPage />;

  // return (
  //   <>
  //     <motion.div
  //       initial={{ opacity: 1, x: '100%', transition: { duration: 1 } }}
  //       animate={{ opacity: 1, x: '0%', transition: { duration: 0.5 } }}
  //       exit={{ opacity: 1, x: '100%', transition: { duration: 0.5 } }}
  //       style={{
  //         position: 'fixed',
  //         border: '1px solid black',
  //         width: '100%',
  //         height: '100%',
  //         background: 'lightgrey',
  //         zIndex: 11,
  //       }}
  //     >
  //       <ShadowButton
  //         content='Home'
  //         style={{
  //           width: 300,
  //           marginTop: 100,
  //           position: 'fixed',
  //         }}
  //         onClick={() => navigate(-1)}
  //       />
  //       <p>우짤래미</p>
  //     </motion.div>
  //     <BottomNav />
  //   </>
  // );
};

export default Search;
