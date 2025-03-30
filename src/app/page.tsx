'use client';
import Image from "next/image";
import { disconnect } from "process";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 text-gray-800 p-6 shadow-md z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold cursor-pointer" onClick={scrollToTop}>
          Kosuke Sakai
        </h1>

        {/* ハンバーガーメニュー（モバイル用） */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* デスクトップ用ナビ */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-600">
            <NavLinks />
          </ul>
        </nav>
      </div>

      {/* モバイル用ドロワー */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 md:hidden"
          >
            <ul className="flex flex-col space-y-4 text-gray-600 text-lg">
              <NavLinks onClick={() => setIsOpen(false)} />
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const linkClass = "relative group text-xl font-bold";
  const underlineClass = "absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full";

  return (
    <>
      <li>
        <a href="#about" className={linkClass} onClick={onClick}>
          About
          <span className={underlineClass}></span>
        </a>
      </li>
      <li>
        <a href="#education" className={linkClass} onClick={onClick}>
          Education
          <span className={underlineClass}></span>
        </a>
      </li><li>
        <a href="#skills" className={linkClass} onClick={onClick}>
          Skills
          <span className={underlineClass}></span>
        </a>
      </li>
      <li>
        <a href="#works" className={linkClass} onClick={onClick}>
          Works
          <span className={underlineClass}></span>
        </a>
      </li>
      <li>
        <a href="#contact" className={linkClass} onClick={onClick}>
          Contact
          <span className={underlineClass}></span>
        </a>
      </li>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 p-4 text-center mt-8 text-sm">
      <p>&copy; {new Date().getFullYear()} Kosuke Sakai. All rights reserved.</p>
    </footer>
  );
}

export default function Home() {
  const [text, setText] = useState("");
  const message = "Weelcome to My Portfolio. ";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < message.length) {
        setText((prev) => prev + message.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-28 space-y-20">
        {/* Welcome セクション */}
        <section className="flex flex-col items-center justify-center min-h-screen" style={{ minHeight: "calc(100vh - 8rem)" }}>
          <div>
            <h2 className="text-3xl font-bold whitespace-pre">{text}</h2>
            <p className="mt-6 text-gray-700 text-lg">
              Showcasing my projects, skills, and experiences in a modern and minimalistic style.
            </p>
          </div>
        </section>

      {/* About セクション */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-20">
        <h3 className="text-2xl font-bold mb-8 text-center">About Me</h3>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 text-left">
          {/* 丸い写真 */}
          <img
            src="/my-photo.jpg"
            alt="My photo"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />

          {/* 箇条書きプロフィール（左揃え） */}
          <ul className="text-gray-700 text-base space-y-2">
            <li><strong>Name:</strong> Kosuke Sakai</li>
            <li><strong>Affiliation:</strong> Graduate School of Information Science, Tohoku University M1</li>
            <li><strong>Interests:</strong> Machine Learning, AI, Data Science</li>
            <li><strong>Email:</strong><a href="mailto:sakai.kosuke.r6@dc.tohoku.ac.jp" className="text-blue-600 hover:underline">sakai.kosuke.r6@dc.tohoku.ac.jp</a></li>
          </ul>
        </div>
      </section>      
      </main>
      <Footer />
    </div>
  );
}

