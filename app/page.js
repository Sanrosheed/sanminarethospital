'use client';
import Features from "./components/Features";
import Footer from "./components/Footer";
// import Image from "next/image";
// import { Nunito_Sans } from '@next/font/google'; // Import the font

// const nunitoSans = Nunito_Sans({
//   subsets: ['latin'], // Choose the subset that you need
//   weight: ['400', '600', '700'], // You can choose different font weights
//   variable: '--font-nunito-sans' // Assign a CSS variable to reference later
// });

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <div>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
      </div>
    </main>
  );
}
