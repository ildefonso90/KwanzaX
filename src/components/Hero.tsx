import { motion, useScroll, useTransform } from 'motion/react';
import heroImage from '../assets/images/erasebg-transformed.png';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0A0A0A] pt-24 pb-16 md:pt-32 md:pb-24">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center center',
          }}
        />

        <div className="absolute inset-x-0 top-0 h-[20vh] md:h-[30vh] bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[24vh] md:h-[40vh] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-[12vw] md:w-[20vw] bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[12vw] md:w-[20vw] bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      </motion.div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 w-full max-w-2xl"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative inline-flex items-center justify-between overflow-hidden rounded-full border border-[#222] bg-[#0A0A0A] px-4 py-2 text-[9px] font-medium text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] sm:px-6 sm:text-[10px]"
          >
            <div className="absolute left-0 top-0 bottom-0 w-14 sm:w-16 bg-gradient-to-r from-purple-800/40 to-transparent mix-blend-screen pointer-events-none" />
            <span className="relative z-10 mr-4 ml-1 sm:ml-2 sm:mr-6 tracking-[0.18em] uppercase font-bold">
              Introducing KwanzaX
            </span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4], rotate: [0, 6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 mr-1 tracking-widest uppercase font-sans"
            >
              Δ
            </motion.span>
          </motion.div>

          <h1 className="mt-6 max-w-xl text-[2.8rem] font-sans font-bold leading-[0.98] tracking-[0.06em] text-white sm:text-5xl lg:text-[4rem]">
            THE FUTURE OF
            <br />
            GLOBAL DIGITAL
            <br />
            FINANCE
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
            A digital financial infrastructure designed for international liquidity,
            efficient settlement, and operational trust at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="order-2 flex w-full items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-lg">
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotateY: [-4, 4, -4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute left-[-10%] top-[12%] hidden text-[#1a1a1a] text-5xl font-black tracking-tighter mix-blend-difference sm:block lg:left-[-20%] lg:text-6xl"
                style={{ transform: 'translateZ(-100px)' }}
              >
                On
              </motion.div>

              <motion.img
                src={heroImage}
                alt="KwanzaX Global Network layout"
                className="h-auto w-full rounded-3xl object-contain opacity-95 drop-shadow-[0_0_80px_rgba(139,92,246,0.15)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="absolute right-[-8%] bottom-[12%] hidden text-5xl font-bold tracking-tighter text-[#6b21a8] opacity-90 drop-shadow-[0_0_20px_rgba(107,33,168,0.4)] sm:block lg:right-[-10%] lg:text-6xl"
                style={{ transform: 'translateZ(100px)' }}
              >
                Chain
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
