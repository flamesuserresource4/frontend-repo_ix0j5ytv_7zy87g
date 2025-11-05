import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'Cutting & Rhythm', level: 'Expert' },
    { name: 'Color Grading', level: 'Advanced' },
    { name: 'Motion Graphics', level: 'Advanced' },
    { name: 'Sound Design', level: 'Advanced' },
    { name: 'Story Structure', level: 'Expert' },
  ];

  return (
    <section id="about" className="relative bg-[#060913] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_0%,rgba(56,189,248,0.18),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Mengapa bekerja dengan saya?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-3 text-blue-100/80"
          >
            Fokus pada ritme, storytelling, dan emosi. Setiap frame dirancang untuk mengantar pesan yang kuat dengan estetika gelap-biru yang khas.
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1020]/70 to-[#0b1020]/30 p-5"
            >
              <div className="text-sm text-blue-200/80">{s.level}</div>
              <div className="mt-1 text-lg font-semibold text-white">{s.name}</div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" style={{ width: `${80 + (i%3)*6}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
