import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { HeroText } from "../components/HeroText";

import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];
<CSVLink data={csvData} filename={"test.csv"}>
  Download me
</CSVLink>;

export default function Home() {
  return (
    <div className="absolute h-full w-full font-sans">
      <Navbar />
      <Hero />
      <HeroText />
    </div>
  );
}
