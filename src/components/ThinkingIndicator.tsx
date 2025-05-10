import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const ThinkingIndicator: React.FC = () => {
  return (
    <div className="flex items-center">
      <span className="text-white/80 mr-3">Thinking</span>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="text-blue-400"
      >
        <Zap size={20} />
      </motion.div>
    </div>
  );
};

export default ThinkingIndicator;