'use client';

import { motion } from "framer-motion";
import { Mail, UserCircle } from "lucide-react";
import Image from "next/image";

export function Contact() {
    return (
    <section id="contact" className="w-full px-4 py-20 bg-gray-50 text-center">
        <h3 className="text-2xl font-bold mb-12">Contact</h3>

        <div className="flex justify-center space-x-[80px]">
        {/* Email */}
        <motion.a
            href="mailto:sakai.kosuke.r6@dc.tohoku.ac.jp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
        <Mail size={40} />
        </motion.a>

        {/* Wantedly */}
        <motion.a
            href="https://www.wantedly.com/id/kousuke_sakai_t"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
        <Image
            src="/wantedly.png"
            alt="Wantedly"
            width={50}
            height={50}
            className="object-contain"
        />
        </motion.a>
    </div>
    </section>
);
}
