import React, { useState } from 'react';
import { Home, Building, TrendingUp, MapPin, FileText, Sprout, ArrowRight, MessageCircle, Sparkles, Check } from 'lucide-react';
import { SITE_CONFIG, ServiceItem } from '../config.ts';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (iconName: ServiceItem['iconName']) => {
    const props = { className: 'w-7 h-7 text-[#8B1FD1] transition-transform duration-300 group-hover:scale-110' };
    switch (iconName) {
      case 'home':
        return <Home {...props} />;
      case 'building':
        return <Building {...props} />;
      case 'trending-up':
        return <TrendingUp {...props} />;
      case 'map-pin':
        return <MapPin {...props} />;
      case 'file-text':
        return <FileText {...props} />;
      case 'sprout':
        return <Sprout {...props} />;
      default:
        return <Home {...props} />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1FD1] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A0F7A] tracking-tight mb-4">
            Our Real Estate Services
          </h2>

          <div className="w-16 h-1 bg-[#8B1FD1] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            End-to-end real estate expertise designed to protect your wealth, construct your dream sanctuary, and guarantee capital growth across Nigeria.
          </p>
        </div>

        {/* 6 Minimal Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.services.map((service) => {
            const serviceWhatsAppUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello Lumcas Realtor, I would like to consult with your team regarding your ${service.title} services.`
            )}`;

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-xl bg-white border border-purple-100/90 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-xl bg-[#FAF7FD] border border-purple-100 flex items-center justify-center mb-6 group-hover:bg-[#8B1FD1]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#4A0F7A] group-hover:text-[#8B1FD1] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 border-t border-purple-100/60 pt-4">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <Check className="w-3.5 h-3.5 text-[#8B1FD1] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-purple-100/80">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A0F7A] group-hover:text-[#8B1FD1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1] rounded-md py-1"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
