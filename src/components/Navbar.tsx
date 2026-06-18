import { motion } from 'motion/react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const X_URL = 'https://x.com/KwanzaXoficial?s=11';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-8 pb-4">
      <div className="max-w-7xl w-full px-6 mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center shrink-0">
          <Link to="/" className="font-sans font-light text-2xl tracking-[0.2em] text-white uppercase">
            Kwanza<span className="font-medium">X</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.22em] uppercase font-medium text-gray-300">
          <Link to="/#tokenomics" className="hover:text-white transition-colors">
            Contract
          </Link>
          <Link to="/#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/#network" className="hover:text-white transition-colors">
            Network
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] text-white px-5 py-2.5 rounded-full text-[10px] tracking-[0.16em] font-medium uppercase transition-colors hover:bg-white/[0.06] hover:border-white/20"
            aria-label="Open KwanzaX on X"
          >
            <span className="font-semibold text-sm leading-none">X</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button className="bg-[#b0b0b0] hover:bg-[#d4d4d4] text-black px-8 py-2.5 rounded-full text-[10px] tracking-[0.1em] font-medium uppercase transition-colors shadow-sm">
            Open App
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A0A0A] absolute top-full left-0 right-0 p-6 flex flex-col gap-4 border-b border-gray-800"
        >
          <Link to="/#tokenomics" className="text-gray-300 hover:text-white text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            Contract
          </Link>
          <Link to="/#features" className="text-gray-300 hover:text-white text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/#network" className="text-gray-300 hover:text-white text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            Network
          </Link>
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.03] text-white py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-white/[0.06]"
          >
            <span className="font-semibold text-base leading-none">X</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button className="w-full bg-[#b0b0b0] text-black py-4 rounded-full mt-1 text-sm font-medium uppercase tracking-widest">
            Open App
          </button>
        </motion.div>
      )}
    </nav>
  );
}
