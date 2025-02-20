"use client";

import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Features } from "./components/sections/Features";
import { Commands } from "./components/sections/Commands";
import { Testimonials } from "./components/sections/Testimonials";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Features />
      <Commands />
      <Testimonials />
      <Footer />
    </main>
  );
}