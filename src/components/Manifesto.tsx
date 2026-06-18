import { motion } from 'motion/react';
import { Eye, Gem, ShieldCheck, Target, Sparkles } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: <Target className="w-5 h-5 text-[#d4af37]" />,
    title: 'Missão',
    text:
      'Criar uma infraestrutura financeira digital que simplifique pagamentos, liquidez e automação para negócios que operam sem fronteiras.',
  },
  {
    icon: <Eye className="w-5 h-5 text-[#60a5fa]" />,
    title: 'Visão',
    text:
      'Ser referência em finanças digitais na África e no mundo, conectando pessoas, empresas e oportunidades com confiança programável.',
  },
  {
    icon: <Gem className="w-5 h-5 text-[#10b981]" />,
    title: 'Valores',
    text:
      'Transparência, segurança, inclusão, inovação e excelência em cada interação, da experiência ao protocolo.',
  },
];

const VALUES = ['Transparência', 'Segurança', 'Inclusão', 'Inovação', 'Excelência', 'Escala'];

const COMMITMENTS = ['Operação 24/7', 'Arquitetura auditável', 'Escala global'];

export function Manifesto() {
  return (
    <section
      id="company"
      className="relative w-full py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div id="docs" className="sr-only" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-[#d4af37]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#c1121f]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-white/70">
            <Sparkles className="h-4 w-4 text-[#d4af37]" />
            Empresa
          </div>
          <h2 className="mt-5 font-heading text-3xl md:text-5xl font-semibold tracking-[0.04em] text-white uppercase">
            Missão, visão e valores
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-white/60 max-w-2xl">
            A base da KwanzaX é simples: construir uma experiência financeira digital que seja
            forte por dentro, elegante por fora e confiável em escala.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.04]"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30"
                >
                  {item.icon}
                </motion.div>
                <h3 className="mt-6 text-lg font-semibold uppercase tracking-[0.14em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{item.text}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-dashed border-[#d4af37]/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute -left-14 bottom-0 h-56 w-56 rounded-full border border-dashed border-white/10"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%)]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/60">
                <ShieldCheck className="h-4 w-4 text-[#10b981]" />
                Fundamento
              </div>

              <h3 className="mt-6 font-heading text-2xl md:text-4xl font-semibold uppercase tracking-[0.05em] text-white">
                Confiança programável para o próximo ciclo financeiro
              </h3>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
                Cada detalhe da interface foi pensado para comunicar solidez: uma navegação clara,
                uma narrativa estratégica e uma estética que parece pronta para operar em escala.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {VALUES.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white/80"
                  >
                    {value}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {COMMITMENTS.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 + 0.15 }}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-white/55"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
