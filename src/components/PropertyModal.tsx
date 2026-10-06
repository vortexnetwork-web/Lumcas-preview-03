import React, { useEffect } from 'react';
import { X, MapPin, CheckCircle2, ShieldCheck, TrendingUp, Maximize2, MessageCircle, Phone } from 'lucide-react';
import { PropertyItem, buildPropertyWhatsAppUrl, SITE_CONFIG } from '../config.ts';

interface PropertyModalProps {
  property: PropertyItem | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [property, onClose]);

  if (!property) return null;

  const whatsappUrl = buildPropertyWhatsAppUrl(property.name);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-purple-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Banner Graphic Placeholder */}
        <div
          className={`relative h-56 sm:h-64 bg-gradient-to-br ${property.gradientTheme} p-6 flex flex-col justify-between text-white overflow-hidden`}
        >
          {/* Subtle architectural silhouette lines */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            }}
          />

          {/* Top Controls */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
              {property.category}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition focus-visible:ring-2 focus-visible:ring-[#8B1FD1]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Title inside banner */}
          <div className="relative z-10">
            <h3 id="property-modal-title" className="text-2xl sm:text-3xl font-serif font-bold drop-shadow-sm">
              {property.name}
            </h3>
            <div className="flex items-center gap-2 text-purple-200 text-sm mt-1">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8B1FD1] font-semibold mb-1">
              Overview
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {property.description}
            </p>
          </div>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#FAF7FD] border border-purple-100">
            <div>
              <span className="text-xs text-slate-400 block">Price Guide</span>
              <span className="text-sm sm:text-base font-bold text-[#4A0F7A]">
                {property.priceGuide}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Plot Dimensions</span>
              <span className="text-sm sm:text-base font-semibold text-slate-800">
                {property.size}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Title Document</span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                {property.titleStatus}
              </span>
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8B1FD1] font-semibold mb-3">
              Estate Amenities & Infrastructure
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#8B1FD1] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projected ROI */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/60">
            <TrendingUp className="w-5 h-5 text-[#8B1FD1] flex-shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-[#4A0F7A]">Capital Growth Forecast: </span>
              <span className="text-slate-600">{property.investmentRoi}</span>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Free physical site inspection available Monday – Saturday.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${SITE_CONFIG.contact.phoneIntl}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition"
            >
              <Phone className="w-4 h-4 text-[#4A0F7A]" />
              <span>Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#8B1FD1] hover:bg-[#4A0F7A] shadow-md transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
