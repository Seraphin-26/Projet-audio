'use client';

import { motion } from 'framer-motion';
import { Battery, Waves, ShieldCheck, Bluetooth, Zap, Headphones } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: Battery,
    title: 'Autonomie 50h',
    description: 'Une journée complète sans recharge',
    color: 'from-emerald-400 to-teal-600',
    size: 'large',
  },
  {
    icon: Waves,
    title: 'Audio Spatial',
    description: 'Immersion sonore 360°',
    color: 'from-cyan-400 to-blue-600',
    size: 'medium',
  },
  {
    icon: ShieldCheck,
    title: 'ANC Adaptatif',
    description: 'Réduction de bruit intelligente',
    color: 'from-violet-400 to-purple-600',
    size: 'medium',
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth 5.3',
    description: 'Connexion ultra-stable',
    color: 'from-blue-400 to-indigo-600',
    size: 'small',
  },
  {
    icon: Zap,
    title: 'Charge Rapide',
    description: '5 min = 3h d\'autonomie',
    color: 'from-amber-400 to-orange-600',
    size: 'small',
  },
  {
    icon: Headphones,
    title: 'Confort Premium',
    description: 'Coussinets en cuir italien',
    color: 'from-rose-400 to-pink-600',
    size: 'small',
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: typeof features[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = feature.icon;

  const sizeClasses: Record<string, string> = {
    large: 'col-span-2 row-span-2',
    medium: 'col-span-1 row-span-2',
    small: 'col-span-1 row-span-1',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${sizeClasses[feature.size] || ''} group relative overflow-hidden rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/10 transition-all duration-300`}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} mb-4`}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-slate-300 dark:text-slate-400">
            {feature.description}
          </p>
        </div>
      </div>

      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 dark:from-white dark:to-slate-500">
            Caractéristiques
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            Technologie de pointe pour une expérience audio exceptionnelle
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
