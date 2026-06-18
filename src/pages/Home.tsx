import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { LoadingScreen } from '../components/LoadingScreen';
import { TokenSnapshot } from '../components/TokenSnapshot';
import { NetworkGraph } from '../components/NetworkGraph';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 16 : 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Hero />
        <TokenSnapshot />
        <Features />
        <NetworkGraph />
      </motion.div>
    </>
  );
}
