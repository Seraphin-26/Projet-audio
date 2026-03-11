'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Package, Shield, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Package,
    text: 'Livraison gratuite',
  },
  {
    icon: Shield,
    text: 'Garantie 2 ans',
  },
  {
    icon: Truck,
    text: 'Retour sous 30 jours',
  },
];

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Prêt pour l'expérience ultime ?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Précommandez dès maintenant et soyez parmi les premiers à
            découvrir l'Aura Sound X
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white rounded-full font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Précommander maintenant
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-cyan-500 to-violet-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Découvrir le prix
            </motion.button>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-full bg-white/10">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    {benefit.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
