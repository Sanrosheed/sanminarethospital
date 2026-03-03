"use client";
import About from "./components/About";
import Appointment from "./components/Appointment";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="bg-gray-100 font-nunito">
      <div>
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Appointment />
        <Footer />
      </div>
    </main>
  );
}
