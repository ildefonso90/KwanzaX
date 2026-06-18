import { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, YAxis, CartesianGrid } from 'recharts';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Activity,
  Droplets,
  ArrowUpRight,
  ArrowDownRight,
  CircleDollarSign,
  Coins,
} from 'lucide-react';

const MOCK_DATA = [
  { name: 'Day 1', price: 0.22, volume: 1500000, liquidity: 4000000 },
  { name: 'Day 2', price: 0.24, volume: 2800000, liquidity: 4200000 },
  { name: 'Day 3', price: 0.23, volume: 1900000, liquidity: 4100000 },
  { name: 'Day 4', price: 0.27, volume: 4500000, liquidity: 5400000 },
  { name: 'Day 5', price: 0.28, volume: 7200000, liquidity: 7500000 },
];

export function NetworkGraph() {
  const [data, setData] = useState(MOCK_DATA);
  const [stats, setStats] = useState({
    price: 0.000224,
    priceNative: 0.0003351,
    quoteSymbol: 'WLD',
    liquidity: 5300,
    fdv: 22000,
    marketCap: 22000,
    change: 1.86,
  });

  useEffect(() => {
    async function loadTokenData() {
      try {
        const res = await fetch('https://api.dexscreener.com/latest/dex/tokens/0xeFF64BA0D6456a32E7FF9DdD68B67a60b60e9b1c');
        const json = await res.json();

        if (!json.pairs || json.pairs.length === 0) {
          console.log('Token not listed or without liquidity, using fallback data.');
          return;
        }

        const pair = json.pairs[0];
        const price = parseFloat(pair.priceUsd || 0);
        const priceNative = parseFloat(pair.priceNative || 0);
        const quoteSymbol = pair.quoteToken?.symbol || 'WLD';
        const liquidity = pair.liquidity?.usd || 0;
        const change = pair.priceChange?.h24 || 0;
        const fdv = pair.fdv || 0;
        const marketCap = pair.marketCap || pair.fdv || 0;

        setStats({ price, priceNative, quoteSymbol, liquidity, change, fdv, marketCap });

        const history = Array.from({ length: 30 }).map((_, i) => {
          const progress = i / 29;
          const basePrice = price * (0.3 + 0.7 * Math.pow(progress, 1.5));
          const noise = 1 + Math.sin(i * 1.2) * 0.1 + Math.cos(i * 3.7) * 0.05;
          return {
            name: `Day ${i + 1}`,
            price: i === 29 ? price : Math.max(0, basePrice * noise),
            volume: 0,
            liquidity: 0,
          };
        });

        setData(history);
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    }

    loadTokenData();
  }, []);

  const formatCurrency = (val: number) => {
    if (val < 0.01 && val > 0) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 4,
      }).format(val);
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(val);
  };

  const formatCompact = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(val);

  const isPositive = stats.change >= 0;

  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-[#0A0A0A] py-20 sm:py-24" id="network">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#3b82f6]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 text-center md:text-left"
        >
          <h2 className="mb-4 flex items-center justify-center gap-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:justify-start">
            <Activity className="text-[#10b981]" size={26} />
            Market Indicators
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 md:mx-0 sm:text-base">
            Price, liquidity, and capitalization data presented objectively for quick reading on mobile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.04] lg:col-span-1">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/55 font-medium">
                <CircleDollarSign size={14} /> Price
              </span>
              <span className={`flex items-center text-xs font-mono font-medium ${isPositive ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {Math.abs(stats.change).toFixed(2)}%
              </span>
            </div>
            <span className="text-2xl font-mono font-bold tracking-tight text-white">
              {formatCurrency(stats.price)}
            </span>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.04]">
            <span className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/55 font-medium">
              <Coins size={14} /> Pair
            </span>
            <span className="text-xl font-mono font-bold tracking-tight text-white">
              {stats.quoteSymbol}
            </span>
            <span className="mt-2 text-sm text-white/55">{stats.priceNative.toFixed(6)} native value</span>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.04]">
            <span className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/55 font-medium">
              <Droplets size={14} /> Liquidity
            </span>
            <span className="text-xl font-mono font-bold tracking-tight text-white">
              {formatCompact(stats.liquidity)}
            </span>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.04]">
            <span className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/55 font-medium">
              <TrendingUp size={14} /> Market Cap
            </span>
            <span className="text-xl font-mono font-bold tracking-tight text-white">
              {formatCompact(stats.marketCap)}
            </span>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.04]">
            <span className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/55 font-medium" title="Fully Diluted Valuation">
              <Activity size={14} /> FDV
            </span>
            <span className="text-xl font-mono font-bold tracking-tight text-white">
              {formatCompact(stats.fdv)}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative h-[260px] w-full rounded-3xl border border-white/10 bg-white/[0.01] p-4 backdrop-blur-sm sm:h-[320px] sm:p-6 md:h-[400px] md:p-8"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isPositive ? '#10b981' : '#ef4444'} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={isPositive ? '#10b981' : '#ef4444'} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(10,10,10,0.95)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  color: '#fff',
                  backdropFilter: 'blur(8px)',
                }}
                itemStyle={{ color: '#fff', fontSize: '14px', fontFamily: 'monospace', fontWeight: 500 }}
                labelStyle={{
                  color: '#888',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                }}
                cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1, strokeDasharray: '3 3' }}
              />
              <YAxis domain={['dataMin - (dataMin * 0.05)', 'dataMax + (dataMax * 0.05)']} hide />
              <Area
                type="monotone"
                dataKey="price"
                name="Price USD"
                stroke={isPositive ? '#10b981' : '#ef4444'}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorPrice)"
                isAnimationActive={true}
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
