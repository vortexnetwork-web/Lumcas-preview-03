import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  Send,
  Sparkles,
  Navigation,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { SITE_CONFIG, buildCustomWhatsAppUrl } from '../config.ts';

// Custom icons for Facebook, Instagram, TikTok
const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.31.88.16 1.8-.02 2.53-.55.81-.59 1.28-1.54 1.3-2.54.04-3.55.02-7.1.03-10.66V.02h.53z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  // Simple enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyInterest: 'Galaxy Estate',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    const whatsappUrl = buildCustomWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      property: formData.propertyInterest,
      message: formData.message || 'I would like to receive pricing, inspection schedule, and title documents.',
    });

    setFormSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const directWhatsAppUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Lumcas Realtor, I'm reaching out to make an inquiry about your properties."
  )}`;

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#FAF7FD] relative overflow-hidden"
      aria-label="Contact Lumcas Realtor"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1FD1] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with our Team</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A0F7A] tracking-tight mb-4">
            Contact Lumcas Realtor
          </h2>

          <div className="w-16 h-1 bg-[#8B1FD1] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Our real estate advisors are ready to walk you through site allocations, legal paperwork, and personalized property viewings.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Phone & WhatsApp */}
          <div className="p-8 rounded-xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#8B1FD1] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Direct Line & WhatsApp
              </span>
              <h3 className="text-xl font-bold text-[#4A0F7A] mb-2 font-serif">
                {SITE_CONFIG.contact.phoneDisplay}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Available 24/7 for instant chat, video tours, and call consultations.
              </p>
            </div>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B1FD1] hover:text-[#4A0F7A] transition"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="p-8 rounded-xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#8B1FD1] flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Official Email
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#4A0F7A] mb-2 break-all">
                {SITE_CONFIG.contact.email}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Send formal proposals, legal verification inquiries, or partnership requests.
              </p>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B1FD1] hover:text-[#4A0F7A] transition"
            >
              <Mail className="w-4 h-4" />
              <span>Send An Email</span>
            </a>
          </div>

          {/* Card 3: Social Channels */}
          <div className="p-8 rounded-xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#8B1FD1] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Follow & Connect
              </span>
              <h3 className="text-lg font-bold text-[#4A0F7A] mb-2 font-serif">
                Social Media Channels
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Watch real site inspection videos, drone aerial shots, and live handover celebrations.
              </p>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumcas Facebook"
                className="w-9 h-9 rounded-lg bg-[#FAF7FD] hover:bg-[#8B1FD1] text-[#4A0F7A] hover:text-white border border-purple-100 flex items-center justify-center transition"
              >
                <FacebookIcon />
              </a>
              <a
                href={SITE_CONFIG.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumcas Instagram"
                className="w-9 h-9 rounded-lg bg-[#FAF7FD] hover:bg-[#8B1FD1] text-[#4A0F7A] hover:text-white border border-purple-100 flex items-center justify-center transition"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE_CONFIG.contact.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumcas TikTok"
                className="w-9 h-9 rounded-lg bg-[#FAF7FD] hover:bg-[#8B1FD1] text-[#4A0F7A] hover:text-white border border-purple-100 flex items-center justify-center transition"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Two Columns: Interactive Enquiry Form & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Column 1: WhatsApp-Connected Enquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B1FD1] font-semibold mb-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>Instant Inquiry Dispatch</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#4A0F7A] mb-2">
                Send an Enquiry via WhatsApp
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill this quick form and click submit to open WhatsApp pre-filled with your customized enquiry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Chief Babatunde Adeleke"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#8B1FD1] focus:ring-2 focus:ring-[#8B1FD1]/20 outline-none text-sm transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0803 123 4567 or +234..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#8B1FD1] focus:ring-2 focus:ring-[#8B1FD1]/20 outline-none text-sm transition"
                  />
                </div>

                {/* Property Selection */}
                <div>
                  <label htmlFor="contact-property" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Property or Service of Interest
                  </label>
                  <select
                    id="contact-property"
                    value={formData.propertyInterest}
                    onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#8B1FD1] focus:ring-2 focus:ring-[#8B1FD1]/20 outline-none text-sm transition bg-white"
                  >
                    {SITE_CONFIG.properties.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.priceGuide})
                      </option>
                    ))}
                    <option value="General Land Investment Consultation">General Land Investment Consultation</option>
                    <option value="Farmland / Agricultural Acreage">Farmland / Agricultural Acreage</option>
                    <option value="Title Deed Search & Verification">Title Deed Search & Verification</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message / Inspection Request
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello, please send me details about payment plans and available plot locations..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#8B1FD1] focus:ring-2 focus:ring-[#8B1FD1]/20 outline-none text-sm transition resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#8B1FD1] hover:bg-[#4A0F7A] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B1FD1]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>

            {formSubmitted && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>WhatsApp conversation launched! If it didn't open automatically, please click below.</span>
              </div>
            )}
          </div>

          {/* Column 2: Google Maps Embed & Get Directions */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B1FD1] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#8B1FD1]" />
                <span>Physical Location & Growth Axis</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#4A0F7A] mb-2">
                Visit Our Office & Estates
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Located in the high-growth Lagos-Epe economic corridor with easy access to major expressway arteries.
              </p>

              {/* Map Container */}
              <div className="relative rounded-xl overflow-hidden border border-purple-100 shadow-inner h-64 sm:h-72 w-full bg-slate-100 mb-6">
                <iframe
                  title="Lumcas Realtor Location Map"
                  src={SITE_CONFIG.contact.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Address details */}
              <div className="p-4 rounded-xl bg-[#FAF7FD] border border-purple-100 mb-6 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8B1FD1] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-relaxed font-medium">
                    {SITE_CONFIG.contact.officeAddress}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#8B1FD1] flex-shrink-0" />
                  <span className="text-xs text-slate-600">
                    {SITE_CONFIG.contact.operatingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* "Get Directions" Button directly linking to specified URL */}
            <a
              href={SITE_CONFIG.contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#4A0F7A] bg-purple-50 hover:bg-[#8B1FD1] hover:text-white border border-purple-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1FD1]"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
