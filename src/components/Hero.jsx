import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#070b14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Grainy gradient overlay - don't block pointer events for Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(37,99,235,0.35),transparent),radial-gradient(700px_300px_at_10%_80%,rgba(56,189,248,0.18),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Editor Video & Storyteller
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg text-blue-100/80 max-w-xl"
          >
            Menghidupkan cerita melalui ritme, warna, dan transisi yang memukau. Spesialis video komersial, musik, event & naratif.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-indigo-700 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Lihat Karya
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10">
              Kontak
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1020]/60 to-[#0b1020]/20 p-6 backdrop-blur">
            <div className="grid grid-cols-3 gap-3">
              {['Cut','Color','Motion','Sound','Story','Speed','Timing','VFX','Grade'].map((t,i)=> (
                <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-700/10 border border-white/10 flex items-center justify-center text-blue-100 text-xs">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
