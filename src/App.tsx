/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WhatIsOnChainLiquidity } from './pages/blog/WhatIsOnChainLiquidity';
import { HowKwanzaxWorks } from './pages/blog/HowKwanzaxWorks';
import { Web3EmergingMarkets } from './pages/blog/Web3EmergingMarkets';
import { StablecoinsEconomy } from './pages/blog/StablecoinsEconomy';
import { AboutUs } from './pages/AboutUs';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog/what-is-on-chain-liquidity" element={<WhatIsOnChainLiquidity />} />
          <Route path="/blog/how-kwanzax-works" element={<HowKwanzaxWorks />} />
          <Route path="/blog/web3-in-emerging-markets" element={<Web3EmergingMarkets />} />
          <Route path="/blog/stablecoins-in-the-economy" element={<StablecoinsEconomy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
