import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';

export function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.button
      onClick={toggleMode}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {isDarkMode ? (
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
          <BsMoon color="white" size={20} className="cursor-pointer" />
        </motion.div>
      )}
    </motion.button>
  );
};
