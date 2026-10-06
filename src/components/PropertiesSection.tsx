import React, { useState } from 'react';
import { MapPin, ShieldCheck, ArrowRight, MessageCircle, Maximize2, Sparkles, Check } from 'lucide-react';
import { SITE_CONFIG, PropertyItem, buildPropertyWhatsAppUrl } from '../config.ts';
import { PropertyModal } from './PropertyModal.tsx';

export const PropertiesSection: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Master-Planned', 'Residential', 'Commercial', 'Waterfront'];

  const filteredProperties = activeFilter === 'All'
    ? SITE_CONFIG.properties
    : SITE_CONFIG.properties.filter(p => p.category === activeFilter);

  return (
    <section
      id="properties"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
      aria-label="Our Properties"
    >
      {/* Subtle background ambient purple glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-100/40 blur-3xl -z-10 pointer-events-none"
      />
      <div
        className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-[#FAF7FD] blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1FD1] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prime Real Estate Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A0F7A] tracking-tight mb-4">
            Our Properties
          </h2>

          <div className="w-16 h-1 bg-[#8B1FD1] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Handpicked, fully verified residential estates, commercial hubs, and high-yield land parcels with guaranteed title documentation across Nigeria's fastest appreciating corridors.
          </p>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  type="button"
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1] ${
                    isActive
                      ? 'bg-[#4A0F7A] text-white shadow-md'
                      : 'bg-[#FAF7FD] text-slate-600 hover:bg-purple-100/70 hover:text-[#4A0F7A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Properties Grid: 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const whatsappUrl = buildPropertyWhatsAppUrl(property.name);

            return (
              <article
                key={property.id}
                className="group relative bg-white rounded-xl border border-purple-100/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Purple Gradient Image Placeholder (Easily replaceable with photos) */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${property.gradientTheme} transition-transform duration-700 group-hover:scale-105 flex flex-col justify-between p-5 text-white`}
                    >
                      {/* Architectural motif pattern */}
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                        }}
                      />

                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white">
                          {property.category}
                        </span>

                        <button
                          onClick={() => setSelectedProperty(property)}
                          className="p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white/90 hover:text-white transition backdrop-blur-md"
                          title="View property details"
                          aria-label={`View full details of ${property.name}`}
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Subtle Architectural Graphic Center Placeholder */}
                      <div className="relative z-10 my-auto text-center pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <span className="font-serif text-xl font-bold text-white">L</span>
                        </div>
                        <span className="text-[11px] font-medium tracking-widest uppercase text-purple-200">
                          Verified Lumcas Estate
                        </span>
                      </div>

                      {/* Bottom Image Tagline / Price */}
                      <div className="relative z-10 flex items-end justify-between">
                        <span className="text-sm font-bold tracking-tight text-white drop-shadow-sm">
                          {property.priceGuide}
                        </span>
                        <span className="text-[11px] text-purple-200 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                          {property.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#8B1FD1] flex-shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>

                    {/* Property Name */}
                    <h3 className="text-xl font-serif font-bold text-[#4A0F7A] group-hover:text-[#8B1FD1] transition-colors mb-2">
                      {property.name}
                    </h3>

                    {/* Short Tagline */}
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {property.tagline}
                    </p>

                    {/* Title Status Badge */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 mb-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{property.titleStatus}</span>
                    </div>

                    {/* Features Preview */}
                    <div className="border-t border-purple-100/60 pt-3 mb-2 space-y-1">
                      {property.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                          <Check className="w-3 h-3 text-[#8B1FD1] flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-purple-100/80 flex items-center gap-2">
                    {/* Primary Button: Enquire on WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#8B1FD1] hover:bg-[#4A0F7A] shadow-md hover:shadow-lg transition-all duration-200 transform active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B1FD1]"
                      aria-label={`Enquire on WhatsApp about ${property.name}`}
                    >
                      <MessageCircle className="w-4 h-4 text-green-300" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    {/* Quick Preview Button */}
                    <button
                      onClick={() => setSelectedProperty(property)}
                      type="button"
                      className="p-2.5 rounded-xl border border-purple-200 hover:border-[#8B1FD1] hover:bg-purple-50 text-slate-600 hover:text-[#4A0F7A] transition"
                      title="More details"
                      aria-label={`View specifications of ${property.name}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#FAF7FD] border border-purple-100/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h4 className="text-xl font-serif font-bold text-[#4A0F7A] mb-1">
              Looking for a Customized Plot Size or Custom Estate Location?
            </h4>
            <p className="text-sm text-slate-600">
              We provide tailored commercial acreage, farmland acquisitions, and exclusive waterfront developments upon request with certified government surveys.
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              "Hello Lumcas Realtor, I need tailored advice on buying land and properties in Nigeria."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#4A0F7A] hover:bg-[#8B1FD1] shadow-md transition whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-green-300" />
            <span>Speak with a Property Advisor</span>
          </a>
        </div>
      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};
