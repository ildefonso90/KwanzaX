import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0A0A0A] py-12">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="sm:col-span-2 md:col-span-1">
          <span className="font-sans font-light text-2xl tracking-[0.2em] text-white uppercase block mb-4">
            Kwanza<span className="font-medium">X</span>
          </span>
          <p className="text-sm text-white/50 max-w-xs leading-relaxed">
            The digital financial infrastructure of the future, focused on agile transactions and settlements.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-4">Resources & Blog</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/blog/what-is-on-chain-liquidity" className="text-sm text-white/60 hover:text-[#d4af37] transition-colors">
                What is On-Chain Liquidity
              </Link>
            </li>
            <li>
              <Link to="/blog/how-kwanzax-works" className="text-sm text-white/60 hover:text-[#d4af37] transition-colors">
                How KwanzaX Works
              </Link>
            </li>
            <li>
              <Link to="/blog/web3-in-emerging-markets" className="text-sm text-white/60 hover:text-[#d4af37] transition-colors">
                Web3 in Emerging Markets
              </Link>
            </li>
            <li>
              <Link to="/blog/stablecoins-in-the-economy" className="text-sm text-white/60 hover:text-[#d4af37] transition-colors">
                Stablecoins in the Economy
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-sm text-white/60 hover:text-[#d4af37] transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-4">Ecosystem</h4>
          <ul className="space-y-3">
            <li>
              <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                CoinMarketCap
              </a>
            </li>
            <li>
              <a href="https://www.coindesk.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                CoinDesk
              </a>
            </li>
            <li>
              <a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                Ethereum Foundation
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-4">Legal</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} KwanzaX. All rights reserved.</p>
      </div>
    </footer>
  );
}
