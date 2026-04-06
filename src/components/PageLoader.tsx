import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
      onAnimationComplete={() => setIsVisible(false)}
      className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white text-center"
        >
          CREDIT TO <span className="text-gold-gradient">CAPITAL</span>
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-4 left-0 h-[1px] bg-brand-500/50"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 text-[10px] font-bold text-brand-500 uppercase tracking-[0.4em]"
      >
        Engineering Leverage
      </motion.div>
    </motion.div>
  );
}
