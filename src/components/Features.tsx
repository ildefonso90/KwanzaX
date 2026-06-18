import { motion } from 'motion/react';
import { Shield, Zap, Globe, Lock } from 'lucide-react';

const FEATURE_DATA = [
  {
    icon: <Globe className="w-6 h-6 text-[#10b981]" />,
    title: 'International Reach',
    description: 'Connection with global markets without depending on a traditional banking structure.',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#3b82f6]" />,
    title: 'Fast Settlement',
    description: 'Real-time transfers and settlement to keep the operational flow continuous.',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#8b5cf6]" />,
    title: 'Institutional Security',
    description: 'Architecture designed for auditing, asset integrity, and long-term trust.',
  },
  {
    icon: <Lock className="w-6 h-6 text-[#f59e0b]" />,
    title: 'Borderless Protocol',
    description: 'Execution via smart contracts to reduce friction, hidden costs, and dependencies.',
  },
];

export function Features() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-[#0A0A0A] py-20 sm:py-24" id="features">
      <div id="resources" className="sr-only" />
      <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none sm:h-72 sm:w-72" />
      <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-[#3b82f6]/5 blur-[120px] pointer-events-none sm:h-72 sm:w-72" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.3em] text-white/45 sm:text-sm sm:tracking-[0.22em]">
            Key Differentiators
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Built for trust, speed, and scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/58 sm:text-base">
            A lean presentation structure, focusing on the elements that matter for a crypto ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_DATA.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04] sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-wide text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
