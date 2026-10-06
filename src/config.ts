/**
 * LUMCAS REALTOR AND PROPERTIES LIMITED
 * Master Configuration File
 *
 * All editable site content (video URL, property listings, contact info,
 * company details, social channels, and services) is centrally configured here.
 */

export interface PropertyItem {
  id: string;
  name: string;
  tagline: string;
  category: 'Residential' | 'Commercial' | 'Waterfront' | 'Master-Planned';
  location: string;
  priceGuide: string;
  titleStatus: string;
  size: string;
  features: string[];
  gradientTheme: string;
  accentBg: string;
  imageAlt: string;
  description: string;
  investmentRoi: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'home' | 'building' | 'trending-up' | 'map-pin' | 'file-text' | 'sprout';
  highlights: string[];
}

export interface WhyUsPoint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SiteConfig {
  videoUrl: string;
  videoPosterFallback: string;
  company: {
    name: string;
    shortName: string;
    legalName: string;
    headline: string;
    subheadline: string;
    storyParagraph1: string;
    storyParagraph2: string;
    storyParagraph3: string;
    establishedYear: number;
    rcNumber: string;
    vision: string;
    mission: string;
  };
  contact: {
    phoneDisplay: string;
    phoneIntl: string;
    whatsappNumber: string;
    email: string;
    officeAddress: string;
    operatingHours: string;
    mapsEmbedUrl: string;
    directionsUrl: string;
    socials: {
      facebook: string;
      instagram: string;
      tiktok: string;
    };
  };
  stats: Array<{
    id: string;
    value: number;
    suffix: string;
    label: string;
    subtext: string;
  }>;
  properties: PropertyItem[];
  services: ServiceItem[];
  whyUs: WhyUsPoint[];
}

export const SITE_CONFIG: SiteConfig = {
  // Hero Video URL (from Vortex Network / Lumcas official prompt asset)
  videoUrl: 'https://github.com/vortexnetwork-web/Lumcas/raw/refs/heads/main/Real-estate_video_generation_prompt_20261003193441%20(1).mp4',
  videoPosterFallback: '#2A0647',

  company: {
    name: 'Lumcas Realtor and Properties Limited',
    shortName: 'Lumcas Realtor',
    legalName: 'Lumcas Realtor and Properties Ltd (RC 7492018)',
    headline: "Find a Home You'll Love",
    subheadline: 'Trusted homes, land and estates across Nigeria',
    storyParagraph1:
      'Lumcas Realtor and Properties Limited was founded on an unyielding principle: every Nigerian—whether living at home or in the diaspora—deserves verified, litigation-free, and high-appreciating real estate ownership without fear of land disputes or regulatory encumbrances.',
    storyParagraph2:
      'Headquartered in Lagos with strategic developments spanning key growth nodes across Lagos, Ogun, and Abuja, we specialize in luxury gated communities, registered title acquisitions (C of O, Governor’s Consent, Gazette), and sustainable master-planned residential environments.',
    storyParagraph3:
      'From the emerging technological hub of Epe to the economic corridors of Ibeju-Lekki and prime waterfront belts, our expert team of surveyors, town planners, and legal consultants ensures seamless handover, immediate physical allocation, and guaranteed title security for every client.',
    establishedYear: 2020,
    rcNumber: 'RC 7492018',
    vision: 'To be West Africa’s most trusted real estate ecosystem for secure land and luxury home development.',
    mission: 'Providing transparent, legally verified, and rapidly appreciating properties that foster generational wealth.',
  },

  contact: {
    phoneDisplay: '0911 833 1382',
    phoneIntl: '+2349118331382',
    whatsappNumber: '2349118331382',
    email: 'Lumcasrealtorandpropertyltd@gmail.com',
    officeAddress: 'Km 38, Lekki-Epe Expressway, Adjacent Alaro City Corridor, Lagos State, Nigeria',
    operatingHours: 'Monday – Saturday: 8:00 AM – 6:00 PM (WhatsApp 24/7)',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126839.8517726593!2d3.8202511499999996!3d6.5746738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf305a4ec6eb9%3A0xb5e9d99d10e5e04b!2sEpe%2C%20Lagos!5e0!3m2!1sen!2sng!4v1717200000000!5m2!1sen!2sng',
    directionsUrl: 'https://maps.app.goo.gl/H3saRQCmej2LMMZz8',
    socials: {
      facebook: 'https://web.facebook.com/lumcasrealtorandpropertylimited/',
      instagram: 'https://www.instagram.com/lumcas_properties/',
      tiktok: 'https://www.tiktok.com/@lumcasrealtorandproperty',
    },
  },

  stats: [
    {
      id: 'stat-homeowners',
      value: 500,
      suffix: '+',
      label: 'Happy Homeowners & Landlords',
      subtext: 'Trusting Lumcas with their wealth',
    },
    {
      id: 'stat-estates',
      value: 7,
      suffix: '+',
      label: 'Prime Estates Developed',
      subtext: 'Strategically located across Nigeria',
    },
    {
      id: 'stat-verified',
      value: 100,
      suffix: '%',
      label: 'Verified & Documented Titles',
      subtext: 'Zero Omo-Onile or boundary conflicts',
    },
  ],

  properties: [
    {
      id: 'galaxy-estate',
      name: 'Galaxy Estate',
      tagline: 'Luxury Gated Living in an Ultra-Modern Smart Estate',
      category: 'Master-Planned',
      location: 'Epe Express Corridor, Lagos',
      priceGuide: 'From ₦8,500,000 / Plot',
      titleStatus: 'C of O in Progress & Registered Survey',
      size: '300sqm & 500sqm',
      features: [
        'Perimeter Fencing & Smart Gate',
        'Paved Interlocked Access Road',
        'Solar-Powered Street Lighting',
        '24/7 Monitored Security Guard',
      ],
      gradientTheme: 'from-[#4A0F7A] via-[#7B1FA2] to-[#25083B]',
      accentBg: 'bg-[#FAF7FD]',
      imageAlt: 'Galaxy Estate Lumcas Realtor luxury property render',
      description:
        'Galaxy Estate is crafted for forward-thinking homeowners and investors seeking high capital growth along the rapidly industrializing Epe-Ibeju axis. Enjoy serene topography with direct access to arterial highways.',
      investmentRoi: '35% Projected Annual Appreciation',
    },
    {
      id: 'lumcas-city-estate',
      name: 'Lumcas City Estate',
      tagline: 'Our Flagship Master-Planned Community Designed for Timeless Heritage',
      category: 'Master-Planned',
      location: 'Ibeju-Lekki Axis, Lagos',
      priceGuide: 'From ₦12,500,000 / Plot',
      titleStatus: "Governor's Consent & Gazetted",
      size: '500sqm & 600sqm',
      features: [
        'Central Drainage Architecture',
        'Recreational Park & Green Spine',
        'Dedicated Commercial Zone',
        'Instant Physical Allocation',
      ],
      gradientTheme: 'from-[#5B108E] via-[#8B1FD1] to-[#2E074D]',
      accentBg: 'bg-[#FAF7FD]',
      imageAlt: 'Lumcas City Estate flagship master-planned community',
      description:
        'Our crown jewel, Lumcas City Estate represents the zenith of contemporary Nigerian estate development. Offering secure titles, dry solid ground, and immediate construction clearance.',
      investmentRoi: '40% Projected Capital Growth',
    },
    {
      id: 'victoria-garden-city',
      name: 'Victoria Garden City',
      tagline: 'Prestigious Green Haven with Scenic Lake Views and Serene Ambience',
      category: 'Residential',
      location: 'Lekki-Epe Expressway, Lagos',
      priceGuide: 'From ₦25,000,000 / Plot',
      titleStatus: 'Certificate of Occupancy (C of O)',
      size: '600sqm & 1,000sqm',
      features: [
        'Underground Cabling & Power',
        'Multi-Purpose Sports Complex',
        'Lakeview Boulevard Promenade',
        'Armed Security & CCTV Coverage',
      ],
      gradientTheme: 'from-[#4A0F7A] via-[#9C27B0] to-[#1F0433]',
      accentBg: 'bg-[#FAF7FD]',
      imageAlt: 'Victoria Garden City premium residential luxury estate',
      description:
        'A sanctuary of regal living where tranquil nature meets urban luxury. Tailored for executives and discerning families who value elite community architecture and top-tier security.',
      investmentRoi: '30% Annual Value Retention & Growth',
    },
    {
      id: 'pinnacle-city-estate',
      name: 'Pinnacle City Estate',
      tagline: 'High-Elevation Prime Land with Rapid Commercial Appreciation',
      category: 'Commercial',
      location: 'Monaiya / Airport Expressway Corridor',
      priceGuide: 'From ₦6,000,000 / Plot',
      titleStatus: 'Deed of Assignment & Registered Survey',
      size: '300sqm, 500sqm & Commercial Acre',
      features: [
        '100% Dry Table Land',
        'Direct Link to New Cargo Hub',
        'Zero Foundation Cost Hazards',
        'Instant Documentation',
      ],
      gradientTheme: 'from-[#3B0A60] via-[#8B1FD1] to-[#1B052B]',
      accentBg: 'bg-[#FAF7FD]',
      imageAlt: 'Pinnacle City Estate high elevation commercial land',
      description:
        'Positioned along the transit nerve center of the upcoming commercial hub. Pinnacle City Estate is optimal for both warehousing, commercial plazas, and high-density residential developments.',
      investmentRoi: '45% High Yield Commercial Corridor',
    },
    {
      id: 'elora-garden-city',
      name: 'Elora Garden City',
      tagline: 'Affordable Luxury Living Nestled in Tranquil Botanical Surroundings',
      category: 'Residential',
      location: 'Alaro City Corridor, Epe, Lagos',
      priceGuide: 'From ₦7,800,000 / Plot',
      titleStatus: 'Free from Govt Acquisition & Survey Plan',
      size: '300sqm & 500sqm',
      features: [
        'Botanical Garden & Parks',
        'Central Treated Water Facility',
        'Modern Automated Gatehouse',
        'Flexible 12-Month Installment',
      ],
      gradientTheme: 'from-[#6A1B9A] via-[#8B1FD1] to-[#310650]',
      accentBg: 'bg-[#FAF7FD]',
      imageAlt: 'Elora Garden City botanical luxury residential plots',
      description:
        'Designed around health, clean air, and serene botanical spaces. Elora Garden City brings lush tranquility together with seamless connectivity to the Lekki Free Trade Zone.',
      investmentRoi: '32% Steady Annual Appreciation',
    },
    {
      id: 'peace-palace-estate',
      name: 'Peace Palace Estate',
      tagline: 'Serene Palatial Living Engineered for Families and Wise Investors',
      category: 'Residential',
      location: 'Simawa / Redemption Camp Axis',
      priceGuide: 'From ₦5,500,000 / Plot',
      titleStatus: 'Registered Survey & Gazette',
      size: '500sqm',
      features: [
        'Electrified Power Distribution',
        'Proximity to Top Schools',
        'Peaceful Residential Zoning',
        'Zero Development Levy Shock',
      ],
      gradientTheme: 'from-[#4A0F7A] via-[#7B1FA2] to-[#25083B]',
      accentBg: 'bg-[#FAF7FD]',
      imageAlt: 'Peace Palace Estate family estate plots',
      description:
        'An oasis of tranquility for family living. Peace Palace Estate eliminates landlord stress and provides an affordable yet prestigious launchpad for constructing your dream duplex or bungalow.',
      investmentRoi: '28% Dependable Rental Yield',
    },
    {
      id: 'coastal-city-estate',
      name: 'Coastal City Estate',
      tagline: 'Breathtaking Waterfront Living Near Free Trade Zone & Deep Sea Port',
      category: 'Waterfront',
      location: 'Coastal Road Corridor, Ibeju-Lekki, Lagos',
      priceGuide: 'From ₦18,000,000 / Plot',
      titleStatus: "Governor's Consent & Maritime Approvals",
      size: '500sqm & 1,000sqm Waterfront',
      features: [
        'Direct Coastal Highway Access',
        'Pristine Waterfront Promenade',
        'Proximity to Lekki Deep Sea Port',
        'High Rental Demand from Expats',
      ],
      gradientTheme: 'from-[#400B6E] via-[#8B1FD1] to-[#1B0328]',
      accentBg: 'bg-[#FAF7FD]',
      imageAlt: 'Coastal City Estate luxury waterfront properties',
      description:
        'Experience luxury waterfront living beside the Atlantic coastal corridor. Unmatched appreciation backed by the Dangote Refinery, Deep Sea Port, and international maritime commerce.',
      investmentRoi: '50% Explosive Capital Upside',
    },
  ],

  services: [
    {
      id: 'property-sales',
      title: 'Property Sales',
      shortDesc: 'Curated luxury homes, penthouses, modern duplexes, and ready-to-move-in residential gems.',
      fullDesc:
        'We match discerning buyers with luxury residential properties built to the highest architectural standards. Every property has undergone meticulous structural checks and title deed validation.',
      iconName: 'home',
      highlights: ['Fully detached & semi-detached duplexes', 'Smart home automation features', 'Title verification guarantee'],
    },
    {
      id: 'estate-development',
      title: 'Estate Development',
      shortDesc: 'Comprehensive master-planning, infrastructure laying, civil engineering, and modern amenities.',
      fullDesc:
        'From raw greenfield acreage to vibrant gated sanctuaries, Lumcas designs and delivers fully serviced estates equipped with paved drainage, solar grids, recreational spaces, and perimeter security.',
      iconName: 'building',
      highlights: ['Interlocked roads & drainage networks', 'Perimeter fencing & smart gatehouses', 'Solar street lighting installations'],
    },
    {
      id: 'property-investment',
      title: 'Property Investment',
      shortDesc: 'High-yield wealth creation, land banking, buy-and-flip strategies, and long-term rental advisory.',
      fullDesc:
        'Maximize capital preservation against inflation through curated Nigerian real estate assets. We advise diaspora and local investors on entry timing, zoning shifts, and lucrative ROI triggers.',
      iconName: 'trending-up',
      highlights: ['Up to 40% annual capital appreciation', 'Buy-and-build and land banking models', 'Hands-off asset management for diaspora'],
    },
    {
      id: 'land-sales',
      title: 'Land Sales',
      shortDesc: 'Verified, 100% dry, litigation-free land parcels with immediate physical allocation.',
      fullDesc:
        'Secure titled land parcels with genuine C of O, Gazette, or Governor’s Consent across fast-developing corridors in Lagos, Ogun, and Abuja. Absolutely zero omo-onile issues or boundary disputes.',
      iconName: 'map-pin',
      highlights: ['Instant deed allocation', '100% dry table topography', 'Registered surveys and clear beacon stones'],
    },
    {
      id: 'real-estate-consultancy',
      title: 'Real Estate Consultancy',
      shortDesc: 'Title deed search, legal verification, site valuation, and bespoke property portfolio planning.',
      fullDesc:
        'Our seasoned property attorneys, registered surveyors, and town-planning advisors offer objective guidance before you commit your hard-earned capital to any property in Nigeria.',
      iconName: 'file-text',
      highlights: ['Bureau of Lands deed search', 'Cadastral surveying & beacon vetting', 'Bespoke corporate & family portfolio audits'],
    },
    {
      id: 'farmland-investment',
      title: 'Farm/Farmland Investment',
      shortDesc: 'Vast fertile agricultural acreage for commercial farming, agro-allied ventures, and future rezoning.',
      fullDesc:
        'Acquire expansive, fertile acreage with accessible motorable roads and water sources. Ideal for commercial crop cultivation, livestock farming, or long-term agro-urban expansion banking.',
      iconName: 'sprout',
      highlights: ['Large acreage parcels available', 'Direct access to agrarian transportation roads', 'High dual-income agro-commercial potential'],
    },
  ],

  whyUs: [
    {
      id: 'why-verified',
      title: 'Verified & Documented Properties',
      subtitle: 'Complete Legal Peace of Mind',
      description:
        'Every single Lumcas estate comes with verifiable government-recognized documentation (C of O, Gazette, Deed of Assignment, Registered Survey). Zero omo-onile disturbances, zero court disputes.',
    },
    {
      id: 'why-pricing',
      title: 'Transparent Pricing',
      subtitle: 'No Hidden Fees or Ambush Levies',
      description:
        'What you see is what you pay. We provide clear, itemized breakdowns covering deed execution, survey, and developmental contributions before you commit, eliminating unexpected surprise costs.',
    },
    {
      id: 'why-locations',
      title: 'Prime Locations',
      subtitle: 'Positioned at the Heart of Rapid Capital Growth',
      description:
        'Our lands and estates are purposefully situated in economic growth zones—the new Lekki International Airport corridor, Epe infrastructure belt, and Coastal Highway axis.',
    },
    {
      id: 'why-guidance',
      title: 'Professional Guidance',
      subtitle: 'Expertise at Every Step of Ownership',
      description:
        'From your first inquiry and complimentary physical site inspection to deed signing and beacon handover, our dedicated real estate advisors guide you with honesty and professionalism.',
    },
    {
      id: 'why-payment',
      title: 'Flexible Payment Options',
      subtitle: 'Tailored Plans that Fit Your Financial Flow',
      description:
        'Own your dream property with convenient, interest-friendly installment structures spanning 3 to 12 months, allowing you to build wealth without financial strain.',
    },
    {
      id: 'why-whatsapp',
      title: 'Responsive WhatsApp Support',
      subtitle: 'Direct, Instant Human Assistance',
      description:
        'No robotic menus or days waiting for email responses. Chat directly with our senior property managers on WhatsApp for instant video tours, document previews, and inspection scheduling.',
    },
  ],
};

/**
 * Helper to build the exact URL-encoded WhatsApp inquiry message required
 */
export function buildPropertyWhatsAppUrl(propertyName: string): string {
  const base = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`;
  const text = `Hello Lumcas Realtor, I'm interested in ${propertyName}. Please share more details.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/**
 * Helper to build custom enquiry form WhatsApp link
 */
export function buildCustomWhatsAppUrl(params: {
  name: string;
  phone: string;
  property?: string;
  message?: string;
}): string {
  const base = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`;
  let text = `Hello Lumcas Realtor,\n\nMy Name: ${params.name}\nMy Phone: ${params.phone}`;
  if (params.property) {
    text += `\nInterested in: ${params.property}`;
  }
  if (params.message) {
    text += `\nMessage: ${params.message}`;
  }
  return `${base}?text=${encodeURIComponent(text)}`;
}
