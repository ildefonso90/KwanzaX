import { motion } from 'motion/react';
import { Check, Copy, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const CONTRACT_ADDRESS = '0xeFF64BA0D6456a32E7FF9DdD68B67a60b60e9b1c';

const FACTS = [
  { label: 'Network Status', value: 'Active on-chain' },
  { label: 'Liquidity', value: 'Monitored on DEX' },
  { label: 'Asset Focus', value: 'Global payments' },
];

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function TokenSnapshot() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
    } catch {
      window.prompt('Copy contract address', CONTRACT_ADDRESS);
    }
  }

  return (
    <section id="tokenomics" className="relative w-full overflow-hidden border-t border-white/5 bg-[#0A0A0A] py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#d4af37]/6 blur-[120px] pointer-events-none sm:h-80 sm:w-80" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-white/70">
            <ShieldCheck className="h-4 w-4 text-[#10b981]" />
            On-chain Summary
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold uppercase tracking-[0.04em] text-white md:text-5xl">
            Contract Address
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            A short and objective dashboard for users to find the official address, copy it securely, and head to the market.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm sm:p-6 md:p-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3 sm:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                  <Sparkles className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Official Address</p>
                  <h3 className="mt-1 text-lg font-semibold uppercase tracking-[0.08em] text-white sm:text-xl">
                    {shortenAddress(CONTRACT_ADDRESS)}
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 sm:px-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Contract</p>
                <p className="mt-3 break-all font-mono text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
                  {CONTRACT_ADDRESS}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/90"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Address copied' : 'Copy address'}
                </button>
                <a
                  href="#network"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:bg-white/[0.06]"
                >
                  <ExternalLink className="h-4 w-4" />
                  View market data
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {FACTS.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.26em] text-white/45">{fact.label}</p>
                <p className="mt-3 text-lg font-semibold uppercase tracking-[0.08em] text-white">
                  {fact.value}
                </p>
              </motion.div>
            ))}

            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
              <p className="text-[10px] uppercase tracking-[0.26em] text-white/45">Note</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
               KwanzaX.digital the Solution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
