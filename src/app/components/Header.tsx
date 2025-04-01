"use client"
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from './NavLinks';

export function Header() {
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