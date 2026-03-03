"use client";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function () {
  return (
    <main className="bg-gray-100 font-nunito">
      <NavBar />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
