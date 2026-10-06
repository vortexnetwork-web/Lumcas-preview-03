/**
 * LUMCAS REALTOR AND PROPERTIES LIMITED
 * Official Web Application
 *
 * All editable site configurations are defined in the config object below.
 */

import React, { useEffect } from 'react';
import { SITE_CONFIG } from './config.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PropertiesSection } from './components/PropertiesSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WhyChooseUsSection } from './components/WhyChooseUsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

/**
 * MASTER CONFIGURATION SHORTCUT
 * For fast updates to video URL, properties, and contact details directly:
 */
export const EDITABLE_CONFIG = {
  VIDEO_URL: SITE_CONFIG.videoUrl,
  WHATSAPP_NUMBER: SITE_CONFIG.contact.whatsappNumber,
  PHONE: SITE_CONFIG.contact.phoneDisplay,
  EMAIL: SITE_CONFIG.contact.email,
  PROPERTIES: SITE_CONFIG.properties,
  MAPS_DIRECTIONS_URL: SITE_CONFIG.contact.directionsUrl,
  SOCIALS: SITE_CONFIG.contact.socials,
};

export default function App() {
  // Intersection Observer for smooth fade-up reveal on scroll for every section
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.fade-up-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#8B1FD1] selection:text-white">
      {/* Fixed Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* Full-screen Hero with Autoplay Loop Video & Gradient Overlay */}
        <Hero />

        {/* Properties Showcase (7 Cards in 1/2/3 Grid + WhatsApp Direct Inquiries) */}
        <div className="fade-up-reveal">
          <PropertiesSection />
        </div>

        {/* Company Story & Count-up Stats */}
        <div className="fade-up-reveal">
          <AboutSection />
        </div>

        {/* 6 Minimal Purple Icon Service Cards */}
        <div className="fade-up-reveal">
          <ServicesSection />
        </div>

        {/* Deep Purple "Why Choose Us" Section */}
        <div className="fade-up-reveal">
          <WhyChooseUsSection />
        </div>

        {/* Contact Details, WhatsApp Form, and Google Maps Embed */}
        <div className="fade-up-reveal">
          <ContactSection />
        </div>
      </main>

      {/* Deep Purple Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Help Button */}
      <FloatingWhatsApp />
    </div>
  );
}
