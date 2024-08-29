import React from 'react';
import { motion } from 'framer-motion';

function AnimatedComponent() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, ease: "linear", loop: Infinity }}
      style={{
        margin: "0 auto",
        width: 100,
        height: 100,
        backgroundColor: "#00f",
        borderRadius: "50%"
      }}
    >
    </motion.div>
  );
}

export default AnimatedComponent;
