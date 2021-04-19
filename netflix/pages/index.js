import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { HeroText } from "../components/HeroText";

export default function Home() {
  return (
    <div className="absolute h-full w-full font-sans">
      <Navbar />
      <Hero />
      <HeroText />

    </div>
  );
}
