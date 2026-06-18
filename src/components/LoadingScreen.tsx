import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import logo from '../assets/images/erasebg-transformed.png';

const LOADING_TAGS = ['Liquidez global', 'Confiança auditável', 'Liquidação rápida'];

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0A0A0A] px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(193,18,31,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[22rem] w-[22rem] rounded-full border border-dashed border-white/8 sm:h-[34rem] sm:w-[34rem]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[16rem] w-[16rem] rounded-full border border-dashed border-[#d4af37]/15 sm:h-[22rem] sm:w-[22rem]"
      />

      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-4 top-6 hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/60 md:flex md:left-10 md:top-16"
      >
        Inicialização da plataforma
      </motion.div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-2 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_90px_rgba(212,175,55,0.1)] sm:h-28 sm:w-28"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-2xl"
          />
          <motion.img
            src={logo}
            alt="KwanzaX"
            className="relative z-10 h-14 w-14 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.12)] sm:h-16 sm:w-16"
            animate={{ y: [0, -3, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/65"
        >
          <Sparkles className="h-4 w-4 text-[#d4af37]" />
          Sincronizando módulos de mercado
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-6 font-heading text-4xl font-semibold uppercase tracking-[0.12em] text-white md:text-5xl"
        >
          KwanzaX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 md:text-base"
        >
          Preparando a infraestrutura financeira digital com foco em confiança, liquidez e execução em escala.
        </motion.p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {LOADING_TAGS.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 + index * 0.08 }}
              className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/60"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="mt-10 w-full max-w-sm">
          <div className="h-1.5 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.55, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#d4af37] via-white to-[#c1121f]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/45">
            <span>Inicializando</span>
            <motion.span
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Preparando a interface
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
