import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alishbah — Frontend Web Developer | Responsive Websites from Karachi" },
      {
        name: "description",
        content:
          "Alishbah is an aspiring frontend web developer from Karachi, Pakistan, building responsive, modern websites with HTML, CSS, and JavaScript. View her live projects and get in touch.",
      },
      { property: "og:title", content: "Alishbah — Frontend Web Developer" },
      {
        property: "og:description",
        content:
          "Responsive, modern websites built with HTML, CSS, and JavaScript. Live projects, services, and contact.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content:
          "https://alishbah-dev-showcase.lovable.app/__l5e/assets-v1/6c7285e5-ced7-4277-82d4-e3c961eaeccc/og-image.jpg",
      },
      {
        property: "og:image:alt",
        content: "AJ logo — Alishbah Jawaid, Frontend Web Developer",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:image",
        content:
          "https://alishbah-dev-showcase.lovable.app/__l5e/assets-v1/6c7285e5-ced7-4277-82d4-e3c961eaeccc/og-image.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
