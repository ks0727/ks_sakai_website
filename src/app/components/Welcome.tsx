"use client";
import { useEffect, useState, useRef } from "react";
export function Welcome(){
    const [text, setText] = useState("");
    const message = "Weelcome to Kosuke Sakai's Portfolio. ";
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
    }, []
    );
     {/* Welcome セクション */}
    return(
        <section
        className="flex flex-col items-center justify-center text-align-center"
        style={{ minHeight: "calc(100vh - 8rem)" }}
        >
            <div>
            <h2 className="text-3xl font-bold whitespace-pre">{text}</h2>
            <p className="mt-6 text-gray-700 text-lg">
                Showcasing my projects, skills, and experiences in a modern and minimalistic style.
            </p>
            </div>
        </section>
    );
}