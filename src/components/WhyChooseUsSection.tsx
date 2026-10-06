import React from 'react';
import { ShieldCheck, CircleDollarSign, Compass, Award, CreditCard, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const WhyChooseUsSection: React.FC = () => {
  // Map index to relevant icon
  const icons = [
    <ShieldCheck className="w-6 h-6 text-purple-200" key="shield" />,
    <CircleDollarSign className="w-6 h-6 text-purple-200" key="dollar" />,
    <Compass className="w-6 h-6 text-purple-200" key="compass" />,
    <Award className="w-6 h-6 text-purple-200" key="award" />,
    <CreditCard className="w-6 h-6 text-purple-200" key="credit" />,
    <MessageCircle className="w-6 h-6 text-purple-200" key="whatsapp" />,
  ];

  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#38095C] via-[#4A0F7A] to-[#25063D] text-white relative overflow-hidden"
      aria-label="Why Choose Lumcas Realtor"
    >
      {/* Decorative ambient radial gradients */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#8B1FD1]/25 blur-3xl pointer-events-none"
      />
      <div
        className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Lumcas Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Why Choose Lumcas Realtor?
          </h2>

          <div className="w-16 h-1 bg-[#8B1FD1] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-sans font-light">
            We eliminate the anxiety, ambiguity, and risks associated with Nigerian real estate, replacing them with institutional security and guaranteed value.
          </p>
        </div>

        {/* 6 Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.whyUs.map((item, index) => {
            return (
              <div
                key={item.id}
                className="group p-8 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#8B1FD1]/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header with subtle number indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#8B1FD1]/30 border border-purple-300/20 flex items-center justify-center group-hover:bg-[#8B1FD1] transition-colors">
                      {icons[index % icons.length]}
                    </div>
                    <span className="font-serif text-2xl font-light text-purple-300/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Subtitle kicker */}
                  <span className="text-[11px] uppercase tracking-wider text-purple-300 font-semibold block mb-1">
                    {item.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-purple-100/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom separator line */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-purple-300">
                  <span>Guaranteed by Lumcas</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Confidence Assurance Strip */}
        <div className="mt-16 p-8 rounded-2xl bg-black/20 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
              Ready to verify a property or request a physical inspection?
            </h4>
            <p className="text-sm text-purple-200">
              Our inspection vehicles depart every Tuesday, Thursday, and Saturday with dedicated property guides.
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              "Hello Lumcas Realtor, I would like to schedule a free site inspection to your estates this week."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#4A0F7A] bg-white hover:bg-purple-50 shadow-xl transition transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#8B1FD1]" />
            <span>Book Free Site Inspection</span>
          </a>
        </div>
      </div>
    </section>
  );
};
