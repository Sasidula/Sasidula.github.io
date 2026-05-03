import { Routes, Route, Link } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ParticleField } from "./components/ParticleField";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { GitHubSection } from "./components/sections/GitHub";
import { Interests } from "./components/sections/Interests";
import { Contact } from "./components/sections/Contact";

// -------------------- Pages --------------------

function Home() {
  return (
      <div className="relative min-h-screen bg-background text-foreground">
        <ParticleField />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <GitHubSection />
            <Interests />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
  );
}

function NotFound() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold">404</h1>
          <p className="mt-2 text-muted-foreground">
            Page not found or moved.
          </p>

          <Link
              to="/"
              className="mt-6 inline-flex rounded bg-primary px-4 py-2 text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
  );
}

// -------------------- App --------------------

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}