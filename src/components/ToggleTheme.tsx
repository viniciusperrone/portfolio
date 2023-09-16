import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '@/hooks/useTheme';

export function ToggleTheme() {
  const { theme, onChangeHandle } = useTheme();

  return (
    <motion.button
      onClick={onChangeHandle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {theme === 'dark' ? (
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <BsSun color="white" size={20} className="cursor-pointer" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <BsMoon color="#64748B" size={20} className="cursor-pointer" />
        </motion.div>
      )}
    </motion.button>
  );
};
