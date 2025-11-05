import React from 'react';
import { Mail, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#070b14] border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_300px_at_90%_0%,rgba(37,99,235,0.25),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Mari wujudkan karya Anda.</h3>
            <p className="mt-2 text-blue-100/80">Siap berkolaborasi untuk iklan, musik, event, atau film pendek.</p>

            <div className="mt-6 flex items-center gap-3 text-white/90">
              <a href="mailto:hello@editor.studio" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 hover:bg-white/15">
                <Mail className="h-4 w-4" /> hello@editor.studio
              </a>
            </div>
          </div>

          <div className="justify-self-start md:justify-self-end">
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Editor Portfolio — Dibangun dengan sentuhan hitam & biru navy.
        </div>
      </div>
    </footer>
  );
}
