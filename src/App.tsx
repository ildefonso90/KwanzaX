/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { LoadingScreen } from './components/LoadingScreen';
import { TokenSnapshot } from './components/TokenSnapshot';
import { NetworkGraph } from './components/NetworkGraph';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden font-sans">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 16 : 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Navbar />
        <Hero />
        <TokenSnapshot />
        <Features />
        <NetworkGraph />
      </motion.div>
    </div>
  );
}
