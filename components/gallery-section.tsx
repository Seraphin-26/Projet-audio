'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const angles = [
  {
    name: 'Vue de face',
    gradient: 'from-cyan-500 via-blue-500 to-violet-500',
    rotation: 0,
  },
  {
    name: 'Vue de profil',
    gradient: 'from-violet-500 via-purple-500 to-pink-500',
    rotation: 90,
  },
  {
    name: 'Vue arrière',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    rotation: 180,
  },
  {
    name: 'Vue détaillée',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    rotation: 270,
  },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = angles.length - 1;
      if (nextIndex >= angles.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-slate-900 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 dark:from-white dark:to-slate-500">
            Galerie Interactive
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            Explorez chaque détail sous tous les angles
          </p>
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-grab active:cursor-grabbing"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${angles[currentIndex].gradient} blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                />
                <div className="relative h-[500px] bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-black rounded-[3rem] shadow-2xl flex items-center justify-center border border-white/10 overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: angles[currentIndex].rotation,
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="relative w-80 h-80"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${angles[currentIndex].gradient} opacity-30 rounded-full blur-3xl`}
                    />
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-white/20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-48 h-48 rounded-full bg-gradient-to-br ${angles[currentIndex].gradient} opacity-50`}
                      />
                    </div>
                  </motion.div>

                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/30 backdrop-blur-lg rounded-full border border-white/10">
                    <p className="text-white font-medium">
                      {angles[currentIndex].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-4 z-10 p-4 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-4 z-10 p-4 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </motion.button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {angles.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
