import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ExternalLink, MessageCircle } from 'lucide-react';
import { LumcasLogo } from './Logo.tsx';
import { SITE_CONFIG } from '../config.ts';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for clean indicator
      const sections = ['home', 'properties', 'about', 'services', 'why-us', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Properties', href: '#properties', id: 'properties' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Lumcas Realtor, I would like to inquire about your verified properties and land in Nigeria."
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100 py-3.5'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1] rounded-lg p-1 transition"
              aria-label="Lumcas Realtor and Properties Home"
            >
              <LumcasLogo
                variant={isScrolled ? 'color' : 'light'}
                size="md"
                showSubtitle={true}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1] rounded-md ${
                      isScrolled
                        ? isActive
                          ? 'text-[#8B1FD1] font-semibold'
                          : 'text-slate-700 hover:text-[#4A0F7A]'
                        : isActive
                        ? 'text-white font-semibold'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          isScrolled ? 'bg-[#8B1FD1]' : 'bg-white'
                        }`}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: WhatsApp Us Pill Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#8B1FD1] hover:bg-[#4A0F7A] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B1FD1]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center justify-center p-2 rounded-full text-white bg-[#8B1FD1] hover:bg-[#4A0F7A] shadow-sm transition"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1] ${
                  isScrolled
                    ? 'text-slate-800 hover:bg-purple-50'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-purple-100">
            <LumcasLogo variant="color" size="sm" showSubtitle={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-[#8B1FD1]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile Links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition ${
                    isActive
                      ? 'bg-purple-50 text-[#8B1FD1] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#4A0F7A]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#8B1FD1]" />}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-purple-100 space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#8B1FD1] hover:bg-[#4A0F7A] shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us Now</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.contact.phoneIntl}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-[#4A0F7A] bg-[#FAF7FD] hover:bg-purple-100 transition"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call: {SITE_CONFIG.contact.phoneDisplay}</span>
          </a>

          <p className="text-center text-xs text-slate-400 pt-2">
            {SITE_CONFIG.company.legalName}
          </p>
        </div>
      </div>
    </>
  );
};
