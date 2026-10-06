import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, Users, Building, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

// Count-up counter hook/component
const StatCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          const duration = 1800; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = value / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasStarted]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-serif font-extrabold text-[#4A0F7A] tracking-tight">
      <span>{count}</span>
      <span className="text-[#8B1FD1]">{suffix}</span>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#FAF7FD] relative overflow-hidden"
      aria-label="About Lumcas Realtor"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1FD1] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Corporate Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A0F7A] tracking-tight mb-4">
            Pioneering Integrity in Nigerian Real Estate
          </h2>

          <div className="w-16 h-1 bg-[#8B1FD1] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Bridging trust, verifiable legal title deeds, and sustainable community master-planning for investors across Nigeria and in the diaspora.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Professional Company Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#4A0F7A] first-letter:mr-2 first-letter:float-left">
                {SITE_CONFIG.company.storyParagraph1}
              </p>

              <p className="text-slate-600">
                {SITE_CONFIG.company.storyParagraph2}
              </p>

              <p className="text-slate-600">
                {SITE_CONFIG.company.storyParagraph3}
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'CAC & Government Registered Firm',
                'Comprehensive Title Deed Vetting',
                'Zero Omo-Onile Harassment Guarantee',
                'Structured Milestone Payments',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#8B1FD1] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quote / Sign-off block */}
            <div className="mt-6 p-5 rounded-xl bg-white border border-purple-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#8B1FD1] font-serif font-bold text-lg flex-shrink-0">
                “
              </div>
              <div>
                <p className="text-sm italic text-slate-700 font-serif">
                  "Our mission is simple: when you invest with Lumcas, you sleep with both eyes closed knowing your children will inherit unquestioned, appreciating wealth."
                </p>
                <span className="block text-xs uppercase tracking-wider text-[#4A0F7A] font-semibold mt-2">
                  Management, Lumcas Realtor & Properties Ltd
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Luxury Image Block & Visual Montage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#8B1FD1] via-[#4A0F7A] to-purple-400 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/5] flex flex-col justify-between p-8 text-white">
                  {/* Background graphic glow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#4A0F7A]/80 via-[#200637]/90 to-[#120320] z-0"
                  />

                  {/* Architectural isometric grid pattern */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none z-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 text-white">
                      Verified Heritage
                    </span>
                    <span className="text-xs text-purple-200">
                      Est. {SITE_CONFIG.company.establishedYear}
                    </span>
                  </div>

                  {/* Central Architectural Monogram */}
                  <div className="relative z-10 text-center my-auto py-8">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-[#8B1FD1] to-[#4A0F7A] p-0.5 shadow-2xl border border-white/20 flex items-center justify-center">
                      <div className="w-full h-full rounded-2xl bg-[#2D0A4B] flex items-center justify-center">
                        <span className="font-serif text-4xl font-bold text-white tracking-widest">
                          LUM
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold mt-4 text-white">
                      Lumcas Realtor
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-purple-200 mt-1">
                      {SITE_CONFIG.company.rcNumber}
                    </p>
                  </div>

                  {/* Bottom Verification Seal */}
                  <div className="relative z-10 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-emerald-300 flex-shrink-0" />
                      <div>
                        <span className="block text-xs font-bold text-white uppercase tracking-wider">
                          100% Genuine Land Registry
                        </span>
                        <span className="text-[11px] text-purple-200">
                          Clear C of O, Gazette & Survey Allocation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accreditations Tag */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-purple-100 hidden sm:flex items-center gap-3 max-w-xs z-20">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-[#8B1FD1]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#4A0F7A]">Government Endorsed</div>
                  <div className="text-[11px] text-slate-500">Full statutory planning compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Count-up Stats Section */}
        <div className="mt-20 pt-16 border-t border-purple-200/70">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            {SITE_CONFIG.stats.map((stat) => (
              <div
                key={stat.id}
                className="p-8 rounded-xl bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="mb-2">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[#4A0F7A] transition-colors mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
