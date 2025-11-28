'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingOverlayProps {
  onLoadingComplete?: () => void;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Slightly longer for dramatic effect

    const checkPageLoad = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false);
      }
    };

    window.addEventListener('load', checkPageLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', checkPageLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 400);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream via-sand to-cream"
        >
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Animated glow effect */}
          <motion.div
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(212,165,116,0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="text-center relative z-10">
            {/* Logo with glow effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
              }}
              className="mb-8 relative"
            >
              {/* Glow behind logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-40 h-40 rounded-full bg-gold/20 blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <Image
                src="/logo.png"
                alt="Hotel Korona Logo"
                width={160}
                height={160}
                className="mx-auto relative z-10 drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Hotel Name */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.5
              }}
              className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-3"
            >
              Hotel Korona
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.7
              }}
              className="font-sans text-gold tracking-[0.3em] uppercase text-sm"
            >
              Coastal Castle Elegance
            </motion.p>

            {/* Gold decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.9
              }}
              className="gold-line gold-line-center mt-8"
            />

            {/* Loading dots */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 1.1
              }}
              className="mt-10"
            >
              <div className="flex justify-center space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gold rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
