import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, ExternalLink } from 'lucide-react';
import { LumcasLogo } from './Logo.tsx';
import { SITE_CONFIG } from '../config.ts';

// Social icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.31.88.16 1.8-.02 2.53-.55.81-.59 1.28-1.54 1.3-2.54.04-3.55.02-7.1.03-10.66V.02h.53z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Properties', href: '#properties' },
    { name: 'About Lumcas', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer
      className="bg-[#24063C] text-white pt-20 pb-12 border-t border-purple-900/60 relative"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <LumcasLogo variant="light" size="lg" showSubtitle={true} />
            <p className="text-sm text-purple-200/80 leading-relaxed font-light max-w-sm">
              Lumcas Realtor and Properties Limited is a registered Nigerian real estate firm dedicated to delivering verified, litigation-free land, master-planned estates, and luxury homes.
            </p>

            <div className="text-xs text-purple-300/70 font-mono">
              Corporate Registration: {SITE_CONFIG.company.rcNumber}
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8B1FD1] text-white flex items-center justify-center transition border border-white/15"
              >
                <FacebookIcon />
              </a>
              <a
                href={SITE_CONFIG.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8B1FD1] text-white flex items-center justify-center transition border border-white/15"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE_CONFIG.contact.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok account"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8B1FD1] text-white flex items-center justify-center transition border border-white/15"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-purple-200 font-semibold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-purple-100/70">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B1FD1] opacity-60 group-hover:opacity-100 transition" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Estates (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-purple-200 font-semibold">
              Featured Estates
            </h4>
            <div className="space-y-2 text-xs text-purple-200/80">
              {SITE_CONFIG.properties.slice(0, 4).map((p) => (
                <a
                  key={p.id}
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Lumcas Realtor, please share more details about ${p.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between transition group"
                >
                  <span className="font-medium text-white group-hover:text-purple-200 transition">
                    {p.name}
                  </span>
                  <span className="text-[11px] text-[#8B1FD1] bg-white/10 px-2 py-0.5 rounded">
                    {p.priceGuide}
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly with Lumcas on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/60 font-light">
          <div>
            © 2026 Lumcas Realtor and Properties Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>RC: 7492018</span>
            <span>Lagos · Abuja · Ogun</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-purple-200 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1] rounded p-1"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
