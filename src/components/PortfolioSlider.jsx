import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

const works = [
  {
    title: 'Brand Launch Montage',
    tag: 'Commercial',
    desc: 'Energi cepat, transisi ritmis, dan color grading biru-navy yang tegas.',
  },
  {
    title: 'Music Video — Neon Drive',
    tag: 'Music',
    desc: 'Vibes futuristik dengan glitch, light streaks, dan cut on beat.',
  },
  {
    title: 'Event Recap: Tech Summit',
    tag: 'Event',
    desc: 'Narasi padat, overlay grafis modern, dan motion typography.',
  },
  {
    title: 'Short Film: Blue Hour',
    tag: 'Narrative',
    desc: 'Tempo emosional, continuity halus, dan permainan shadow-highlight.',
  },
  {
    title: 'Product Teaser — AeroPods',
    tag: 'Commercial',
    desc: 'Makro detail, whoosh transisi, dan sound design punchy.',
  },
  {
    title: 'Fashion Lookbook',
    tag: 'Fashion',
    desc: 'Cut minimalis, pacing elegan, dan palet gelap berkelas.',
  },
  {
    title: 'Travel Reel: Midnight City',
    tag: 'Travel',
    desc: 'Hyperlapse, timelapse, dan motion blur yang dinamis.',
  },
  {
    title: 'Sports Hype Edit',
    tag: 'Sports',
    desc: 'Impactful hits, speed ramp, dan freeze-frame efek tinta.',
  },
  {
    title: 'Corporate Profile',
    tag: 'Corporate',
    desc: 'Clean storytelling, B-roll kuat, dan lower-third profesional.',
  },
];

function SlideCard({ item, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: active ? 1 : 0.98 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`relative w-full h-full rounded-3xl overflow-hidden border ${active ? 'border-blue-400/40' : 'border-white/10'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_0%,rgba(37,99,235,0.25),transparent),radial-gradient(600px_300px_at_90%_100%,rgba(99,102,241,0.25),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#0b1020]/80 to-[#0b1020]/60" />

      <div className="relative z-10 h-full flex flex-col p-6 sm:p-10">
        <div className="flex items-center gap-2 text-blue-200/80 text-xs uppercase tracking-wider">
          <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
          {item.tag}
        </div>
        <h3 className="mt-2 text-2xl sm:text-4xl font-bold text-white leading-tight">{item.title}</h3>
        <p className="mt-3 text-blue-100/80 max-w-xl">{item.desc}</p>

        <div className="mt-auto pt-6">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition">
            <Play className="h-4 w-4" />
            Tonton Teaser
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSlider() {
  const [index, setIndex] = useState(0);
  const total = works.length;
  const prev = () => setIndex((p) => (p - 1 + total) % total);
  const next = () => setIndex((p) => (p + 1) % total);

  const neighbors = useMemo(() => {
    const left = (index - 1 + total) % total;
    const right = (index + 1) % total;
    return { left, center: index, right };
  }, [index, total]);

  return (
    <section id="portfolio" className="relative py-24 bg-[#060913]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_400px_at_50%_0%,rgba(30,58,138,0.35),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Karya Pilihan</h2>
            <p className="text-blue-100/80 mt-2">9 konten berbeda, tiap slide menonjolkan gaya dan keahlian editing.</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Prev" className="h-10 w-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 flex items-center justify-center">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="h-10 w-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[440px] sm:h-[520px]">
          <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AnimatePresence initial={false} mode="popLayout">
              <div key={`left-${neighbors.left}`} className="hidden sm:block">
                <SlideCard item={works[neighbors.left]} active={false} />
              </div>
              <div key={`center-${neighbors.center}`} className="col-span-1 sm:col-span-1">
                <SlideCard item={works[neighbors.center]} active={true} />
              </div>
              <div key={`right-${neighbors.right}`} className="hidden sm:block">
                <SlideCard item={works[neighbors.right]} active={false} />
              </div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {works.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-blue-500' : 'w-2.5 bg-white/20 hover:bg-white/30'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
