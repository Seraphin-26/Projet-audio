'use client';

import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function FooterSection() {
  return (
    <footer className="relative py-20 px-6 bg-slate-950 dark:bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-600"
            >
              Aura Sound X
            </motion.h3>
            <p className="text-slate-400">
              L'excellence sonore au service de vos émotions
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Produit', 'Caractéristiques', 'Support', 'Contact'].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center text-slate-500"
        >
          <p>© 2024 Aura Sound X. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
