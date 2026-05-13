import {
  AppWindow,
  BadgeDollarSign,
  BarChart3,
  Boxes,
  BrainCircuit,
  Globe2,
  Megaphone,
  Palette,
  Rocket,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const navLinks = ["Services", "About", "Process", "Work", "Contact"];

export const services = [
  {
    title: "Website & Developments",
    description: "Conversion-led websites, landing systems, dashboards, and scalable digital products engineered for speed and polish.",
    icon: AppWindow,
  },
  {
    title: "Mobile Application",
    description: "Premium iOS and Android experiences with clean flows, robust architecture, and launch-ready product strategy.",
    icon: Smartphone,
  },
  {
    title: "Marketing Creative",
    description: "Scroll-stopping ad creatives, campaign visuals, launch assets, and brand stories crafted for modern attention spans.",
    icon: Palette,
  },
  {
    title: "Ecommerce Solutions",
    description: "High-performing storefronts, optimized funnels, retention systems, and commerce experiences built to sell globally.",
    icon: ShoppingBag,
  },
  {
    title: "Performance Marketing",
    description: "Full-funnel paid media strategy, creative testing, analytics, and optimization to unlock profitable scale.",
    icon: BadgeDollarSign,
  },
  {
    title: "Brand Building",
    description: "Positioning, identity systems, messaging, and launch frameworks that create memorable category leaders.",
    icon: Sparkles,
  },
  {
    title: "SEO (Search Engine Optimization)",
    description: "Technical SEO, content systems, authority building, and search architecture for compounding organic growth.",
    icon: SearchCheck,
  },
  {
    title: "Overseas Business Development",
    description: "Market entry playbooks, partner pipelines, and growth operations designed for international expansion.",
    icon: Globe2,
  },
];

export const stats = [
  { label: "Projects Delivered", value: 240, suffix: "+" },
  { label: "ROAS Generated", value: 7.8, suffix: "x" },
  { label: "Brands Scaled", value: 90, suffix: "+" },
  { label: "Global Reach", value: 18, suffix: " markets" },
];

export const processSteps = [
  { title: "Discovery", description: "We audit your market, customer psychology, funnel friction, and growth opportunities.", icon: BrainCircuit },
  { title: "Strategy", description: "We shape a focused roadmap across brand, product, acquisition, and conversion systems.", icon: Target },
  { title: "Execution", description: "Designers, engineers, and growth operators ship polished assets with production discipline.", icon: Workflow },
  { title: "Optimization", description: "We read the data, test precise improvements, and remove the constraints slowing scale.", icon: BarChart3 },
  { title: "Scaling", description: "Winning systems become repeatable growth engines across channels, markets, and teams.", icon: Rocket },
];

export const portfolio = [
  { name: "Aurora Commerce", category: "Ecommerce Growth", metric: "+312% conversion lift", icon: ShoppingBag },
  { name: "Northline Labs", category: "SaaS Website System", metric: "41% lower CAC", icon: Boxes },
  { name: "Vanta Studio", category: "Brand & Creative", metric: "2.4M launch reach", icon: Megaphone },
  { name: "Orbital Fitness", category: "Mobile Product", metric: "120K app installs", icon: Smartphone },
];

export const testimonials = [
  { quote: "Market Ops gave our brand the kind of precision, polish, and growth cadence we had been missing for years.", name: "Ari Mehta", role: "Founder, NovaHaus" },
  { quote: "The team paired premium creative with performance thinking. Every launch felt measured, intentional, and elevated.", name: "Lena Ortiz", role: "CMO, Atlas Mode" },
  { quote: "They transformed our website from a brochure into a scalable acquisition system with a world-class visual identity.", name: "Marcus Chen", role: "CEO, Kinship Supply" },
  { quote: "Their overseas development playbook opened partner conversations we could not access before.", name: "Priya Shah", role: "Director, Meridian Trade" },
];

export const logoNames = ["NOVA", "ATLAS", "KINSHIP", "MERIDIAN", "ORBITAL", "VANTA", "AURORA", "NORTHLINE"];
