import {
  Boxes,
  Building2,
  Cable,
  Factory,
  Globe2,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Ship,
  Waypoints,
} from "lucide-react";

export const whatsappNumber = "6583889168";
export const whatsappMessage = encodeURIComponent("Hello Sprintz Holdings, I would like to submit an inquiry.");
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
export const companyEmailPrimary = "chanlp@sprintz.com.sg";
export const companyEmailSecondary = "zannchan@gmail.com";
export const companyAddress = "22 Sin Ming Lane, #06-76, Midview City, Singapore 573969";
export const siteDomain = "www.sprintz.com.sg";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Industrial Supply", href: "/industrial-supply" },
  { label: "Commodities", href: "/commodities" },
  { label: "Global Sourcing", href: "/global-sourcing" },
  { label: "Contact", href: "/contact" },
];

export const industrialCategories = [
  {
    title: "Automation & Control",
    desc: "Support for PLC systems, HMI panels, controllers, I/O modules, and automation-related industrial requirements.",
    items: ["PLC systems", "I/O modules", "HMI panels", "Industrial controllers"],
    icon: Boxes,
  },
  {
    title: "Electrical Distribution",
    desc: "Sourcing support for switchgear, breakers, transformers, panel components, and electrical infrastructure requirements.",
    items: ["Circuit breakers", "Switchgear", "Transformers", "Panel components"],
    icon: ShieldCheck,
  },
  {
    title: "Drives & Motion",
    desc: "Commercial sourcing for motion systems and motor control solutions used in industrial operations and equipment upgrades.",
    items: ["Variable speed drives", "Servo systems", "Motor controls", "Drive accessories"],
    icon: Waypoints,
  },
  {
    title: "Sensors & Instrumentation",
    desc: "Procurement support for measuring, monitoring, and process-related devices across industrial environments.",
    items: ["Proximity sensors", "Flow meters", "Temperature control", "Measurement devices"],
    icon: PackageCheck,
  },
  {
    title: "Cables & Wiring Solutions",
    desc: "Supply support for power, control, and industrial wiring needs across plant, panel, and infrastructure use cases.",
    items: ["Power cables", "Control cables", "Industrial wiring", "Connection accessories"],
    icon: Cable,
  },
  {
    title: "Project & Replacement Sourcing",
    desc: "Flexible procurement support for urgent requirements, replacement parts, shortage items, and project-based schedules.",
    items: ["Replacement parts", "Bulk procurement", "Hard-to-find items", "Project-based sourcing"],
    icon: Factory,
  },
];

export const commodityItems = [
  { title: "Rice", desc: "Commercial coordination for rice supply transactions covering selected origins and contract volumes for qualified buyers.", icon: Building2 },
  { title: "Sugar", desc: "Structured ICUMSA 45 sugar transactions with formal inquiry, offer, contract, and payment workflow support.", icon: PackageCheck },
  { title: "Coal", desc: "Transaction support for Indonesian-origin coal opportunities, subject to buyer qualification and commercial terms.", icon: Factory },
  { title: "Fuel & Energy Products", desc: "Support for selected energy-related inquiries under commercially reviewed structure and counterparty compliance.", icon: ShieldCheck },
  { title: "Palm Oil Derivatives", desc: "Regional trade support for selected palm oil derivative transactions based on volume, specifications, and buyer profile.", icon: Globe2 },
  { title: "Structured Trade Documentation", desc: "Workflow support covering inquiries, quotations, LOI, SPA, invoice coordination, and shipment documentation process.", icon: Handshake },
];

export const sourcingPoints = [
  "Multi-brand product access across industrial categories",
  "Commercial flexibility for urgent and bulk requirements",
  "Cross-border procurement coordination",
  "Support for project, replacement, and shortage sourcing",
  "Structured documentation and inquiry management",
  "Scalable model for regional and international buyers",
];

export const processSteps = [
  "Inquiry or LOI submission with product or trade requirement",
  "Commercial review, sourcing validation, and quotation / offer issuance",
  "Negotiation of specifications, quantities, pricing, and terms",
  "Contract or purchase documentation finalization",
  "Payment arrangement under agreed commercial structure",
  "Shipment, inspection, and documentation coordination",
];

export const markets = ["China", "Middle East", "Southeast Asia", "India", "Regional contractors", "Project counterparties"];
