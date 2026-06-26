import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Globe, Heart, Target, Zap, Users, Rocket } from 'lucide-react';

export function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | KwanzaX</title>
        <meta name="description" content="Discover KwanzaX, a technological and financial project focused on democratizing access to the digital economy." />
      </Helmet>

      <main className="relative w-full pt-32 pb-24 bg-[#0A0A0A] min-h-screen overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#10b981]/5 blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              About Us <span className="text-[#d4af37]">—</span> KwanzaX
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              KwanzaX is a technological and financial project born with the purpose of democratizing access to the digital economy and creating real solutions for underprivileged communities.
            </p>
          </motion.div>

          {/* Context section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
          >
            <p className="text-white/80 leading-relaxed text-lg">
              We live in a world where millions of people still face difficulties accessing basic financial services. KwanzaX emerges to change this scenario, using blockchain technology as a tool for inclusion, transparency, and growth.
            </p>
          </motion.section>

          {/* Missão, Visão, Propósito */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <Target className="w-8 h-8 text-[#10b981] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/70 leading-relaxed">
                Promote global financial inclusion by offering simple, accessible, and secure solutions through a blockchain-based digital ecosystem.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <Globe className="w-8 h-8 text-[#3b82f6] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                To be a global reference in digital financial inclusion solutions, connecting communities to the future of technology and the decentralized economy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 p-8 rounded-3xl border border-[#d4af37]/20 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05),transparent)]"
            >
              <Heart className="w-8 h-8 text-[#d4af37] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Purpose</h2>
              <p className="text-white/80 leading-relaxed text-lg">
                More than just a token, KwanzaX is a movement seeking to transform realities, creating a fairer, more accessible, and sustainable system for everyone.
              </p>
            </motion.div>
          </div>

          {/* O Que Fazemos & Compromisso */}
          <div className="space-y-16 mb-24">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Zap className="w-6 h-6 text-[#8b5cf6]" />
                <h2 className="text-3xl font-bold text-white">What We Do</h2>
              </div>
              <p className="text-white/70 mb-6 text-lg">
                We develop an ecosystem where the KwanzaX token serves as the foundation for:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Fast and low-cost transfers",
                  "Access to digital financial services",
                  "Integration with technological applications (mini apps)",
                  "Community incentives through rewards and airdrops"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-6 h-6 text-[#f59e0b]" />
                <h2 className="text-3xl font-bold text-white">Commitment to the Community</h2>
              </div>
              <p className="text-white/70 mb-6 text-lg">
                We believe that technology should benefit everyone. Therefore, we work to:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Support youth and entrepreneurs",
                  "Create digital economic opportunities",
                  "Encourage financial and technological education",
                  "Strengthen communities through innovation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Fundadores */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/10 pt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">The Creators</h2>
              <p className="text-white/60 text-lg">The minds behind the KwanzaX revolution.</p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { name: "Creator Name 1", role: "Co-Founder" },
                { name: "Creator Name 2", role: "Co-Founder" },
                { name: "Creator Name 3", role: "Co-Founder" }
              ].map((creator, i) => (
                <div key={i} className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] text-center hover:border-white/20 transition-colors">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#222] to-[#333] mb-4 flex items-center justify-center border border-white/10 shadow-lg">
                    <Rocket className="w-8 h-8 text-white/40" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{creator.name}</h3>
                  <p className="text-sm text-[#d4af37] font-medium tracking-wide uppercase">{creator.role}</p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
    </>
  );
}
