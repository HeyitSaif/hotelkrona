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
    }, 1800);

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-cream via-sand to-cream"
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
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(196,166,90,0.2) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
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
              className="mb-10 relative"
            >
              {/* Glow behind logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 rounded-full bg-gold/20 blur-3xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3],
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
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-4"
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
              className="font-sans text-gold tracking-[0.4em] uppercase text-xs md:text-sm font-bold"
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
              className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mt-10"
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
              className="mt-12"
            >
              <div className="flex justify-center space-x-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-2.5 bg-gold rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.3, 0.8]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-12 left-12 w-20 h-20 border-l-2 border-t-2 border-gold/20 hidden md:block" />
          <div className="absolute top-12 right-12 w-20 h-20 border-r-2 border-t-2 border-gold/20 hidden md:block" />
          <div className="absolute bottom-12 left-12 w-20 h-20 border-l-2 border-b-2 border-gold/20 hidden md:block" />
          <div className="absolute bottom-12 right-12 w-20 h-20 border-r-2 border-b-2 border-gold/20 hidden md:block" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
