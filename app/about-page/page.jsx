import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";

export default function About() {
  return (
    <main className="bg-gray-100 font-nunito">
      <div>
        <NavBar />
        <Hero />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
