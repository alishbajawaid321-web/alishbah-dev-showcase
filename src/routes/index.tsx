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
