'use client';
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Welcome } from "./components/Welcome";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Awards } from "./components/Awards";
import { Certificate } from "./components/Certificate";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 flex flex-col px-4 pt-28 space-y-20">
      <Welcome />
      <AboutMe />
      <Education />
      <Awards />
      <Skills />
      <Certificate />
      <Works />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

