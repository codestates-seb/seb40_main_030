import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Item = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ border: '1px solid red' }}
      >
        <Link to='/'>item</Link>
      </motion.div>
      <div>
        <motion.div layoutId='1'>ddd</motion.div>
        <motion.div layoutId='1' animate>
          ddd
        </motion.div>
      </div>
    </>
  );
};

export default Item;
