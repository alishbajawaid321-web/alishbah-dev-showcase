import craveHubImg from "@/assets/project-cravehub.jpg";
import freshCartImg from "@/assets/project-freshcart.jpg";
import lumeraImg from "@/assets/project-lumera.jpg";
import quranImg from "@/assets/project-quran.jpg";

export type ProjectStatus = "completed" | "in-progress";

export type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  image: string;
  status: ProjectStatus;
  isClientProject: boolean;
  liveUrl?: string;
};

export const contact = {
  email: "alishbajawaid321@gmail.com",
  phone: "03196714921",
  location: "Karachi, Pakistan",
};

export const projects: Project[] = [
  {
    id: "crave-hub",
    index: "01",
    name: "Crave Hub",
    category: "Fast Food Restaurant Website",
    description:
      "A modern restaurant website designed to showcase fast-food items, menus, and restaurant information.",
    longDescription:
      "Crave Hub is a portfolio project built to practise layout structure, menu presentation, and responsive design for a food business. It focuses on an appetising visual hierarchy and clear navigation between the menu and restaurant information.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Menu sections with clear item presentation",
      "Responsive layout for mobile, tablet, and desktop",
      "Interactive navigation and smooth scrolling",
      "Deployed live through Vercel",
    ],
    image: craveHubImg,
    status: "completed",
    isClientProject: false,
    liveUrl: "https://cravehub-pixel-perfection.vercel.app",
  },
  {
    id: "fresh-cart",
    index: "02",
    name: "Fresh Cart",
    category: "Grocery Store Website",
    description:
      "A grocery e-commerce-style website designed to display grocery products and create a convenient shopping experience.",
    longDescription:
      "Fresh Cart is a portfolio project exploring product grids, category browsing, and the layout patterns used by online grocery stores, built with a focus on clean structure and readability.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Product grid with category sections",
      "Shopping-style interface built with plain JavaScript",
      "Fully responsive across screen sizes",
      "Deployed live through Vercel",
    ],
    image: freshCartImg,
    status: "completed",
    isClientProject: false,
    liveUrl: "https://freshcart-daily.vercel.app/",
  },
  {
    id: "lumera",
    index: "03",
    name: "Lumera",
    category: "Fashion Brand Website",
    description:
      "A clean and modern fashion website designed to showcase dresses and clothing collections.",
    longDescription:
      "Lumera is a portfolio project focused on editorial layout, typography, and imagery — presenting a fashion collection with generous whitespace and a calm, premium feel.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Editorial hero and collection grid",
      "Typography-led visual hierarchy",
      "Responsive image handling",
      "Deployed live through Vercel",
    ],
    image: lumeraImg,
    status: "completed",
    isClientProject: false,
    liveUrl: "https://lumera-brand-experience-z1pf.vercel.app/",
  },
  {
    id: "quran-tutor",
    index: "04",
    name: "Online Quran Tutor Website",
    category: "Client Project — Education",
    description:
      "A professional website for an Online Quran Tutor, focused on presenting Quran tutoring services, courses, and useful information for students interested in learning online.",
    longDescription:
      "This is my current client project. The website presents Quran tutoring services and course information in a clear, professional structure that works well on every screen size.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Service and course presentation",
      "Clear information structure for prospective students",
      "Mobile-first responsive layout",
      "Currently in active development",
    ],
    image: quranImg,
    // Change to "completed" and add liveUrl once the client project ships.
    status: "in-progress",
    isClientProject: true,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

