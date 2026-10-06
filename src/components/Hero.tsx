import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, MessageCircle, Building2, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Attempt auto-play when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy might require user gesture, fallback gracefully
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHeroUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Lumcas Realtor, I'm reaching out from your website. I want to inquire about your verified properties and land."
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#24063C]"
      aria-label="Lumcas Hero"
    >
      {/* Background Poster & Loading Atmosphere */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundColor: SITE_CONFIG.videoPosterFallback,
          backgroundImage: `radial-gradient(circle at 50% 30%, #5B108E 0%, #2A0647 60%, #170326 100%)`,
        }}
      />

      {/* Hero Background Video */}
      {!videoError && (
        <video
          ref={videoRef}
          src={SITE_CONFIG.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-90' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      )}

      {/* Deep-Purple-to-Transparent Gradient Overlay for optimal editorial legibility */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, 
            rgba(26, 4, 43, 0.72) 0%, 
            rgba(74, 15, 122, 0.55) 45%, 
            rgba(32, 6, 55, 0.88) 85%, 
            rgba(23, 3, 38, 0.98) 100%)`,
        }}
      />

      {/* Subtle architectural grid pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Video Audio Control Toggle (Bottom right of hero) */}
      {videoLoaded && !videoError && (
        <button
          onClick={toggleSound}
          type="button"
          className="absolute bottom-10 right-6 sm:right-10 z-20 flex items-center gap-2 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md transition-all text-xs border border-white/10"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#8B1FD1]" />}
        </button>
      )}

      {/* Main Editorial Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20 flex flex-col items-center">
        {/* Small caps kicker line */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-6 shadow-inner animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B1FD1] animate-ping" />
          <span>LUMCAS REALTOR & PROPERTIES</span>
        </div>

        {/* Big Serif Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl drop-shadow-md">
          {SITE_CONFIG.company.headline}
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-purple-100/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          {SITE_CONFIG.company.subheadline}
        </p>

        {/* Two Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Solid Purple Button: View Properties */}
          <button
            onClick={() => handleScrollTo('properties')}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#8B1FD1] hover:bg-[#4A0F7A] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B1FD1]"
          >
            <Building2 className="w-5 h-5 text-white/90" />
            <span>View Properties</span>
            <ChevronRight className="w-4 h-4 text-white/80" />
          </button>

          {/* Outlined White Button: Chat on WhatsApp */}
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-transparent hover:bg-white/10 border-2 border-white/80 hover:border-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Verified Security Badges Kicker */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-purple-200/80 font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Government Verified Titles</span>
          </div>
          <span className="hidden sm:inline text-purple-400/40">·</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Zero Omo-Onile Encumbrance</span>
          </div>
          <span className="hidden sm:inline text-purple-400/40">·</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Instant Physical Allocation</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll-down cue at bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={() => handleScrollTo('properties')}
          type="button"
          aria-label="Scroll down to properties"
          className="group flex flex-col items-center text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1] rounded-full p-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-purple-200 mb-2 group-hover:text-white transition">
            Explore Estates
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 group-hover:border-white/60 transition">
            <div className="w-1.5 h-2.5 rounded-full bg-[#8B1FD1] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
