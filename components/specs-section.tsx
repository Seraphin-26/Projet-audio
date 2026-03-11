'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const specs = [
  { label: 'Drivers', value: '40mm Titanium' },
  { label: 'Réponse en fréquence', value: '20Hz - 40kHz' },
  { label: 'Impédance', value: '32 Ohms' },
  { label: 'Sensibilité', value: '105 dB' },
  { label: 'Poids', value: '250g' },
  { label: 'Matériaux', value: 'Aluminium & Cuir' },
  { label: 'Microphones ANC', value: '8 unités' },
  { label: 'Codec Audio', value: 'LDAC / aptX HD' },
];

export function SpecsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black dark:from-black dark:via-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 dark:from-white dark:to-slate-500">
            Spécifications Techniques
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            Performance audiophile dans chaque détail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative z-10">
                <p className="text-sm text-slate-400 dark:text-slate-500 mb-2">
                  {spec.label}
                </p>
                <p className="text-2xl font-bold text-white">{spec.value}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
