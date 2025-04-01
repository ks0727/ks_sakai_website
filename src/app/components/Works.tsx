import Link from "next/link";
import { motion } from "framer-motion";

export function Works() {
    const works = [
        {
            title: "ポートフォリオサイト",
            description: "Next.jsの練習として作成しました！",
            image: "/images/portfolio.png",
            link: "/works/portfolio",
            isComingSoon: true,
        },
        {
            title: "日記アプリ",
            description: "Djangoの練習として作成しました！",
            image: "/images/diary_app.png",
            link: "/works/travelplanner",
            isComingSoon: true,
        },
        {
            title: "画像判別アプリ",
            description: "PyTorch + Django で作成した画像認識モデルのアプリ。",
            image: "/images/item_desc_gen.png",
            link: "/works/imageclassifier",
            isComingSoon: true,
        },
    ];

    return (
        <section id="works" className="w-[90%] mx-auto px-4 py-20 pt-32">
            <h3 className="text-2xl font-bold mb-12 text-center">Works</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {works.map((work, index) => {
                    const card = (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-transform ${
                                work.isComingSoon ? "cursor-default" : "cursor-pointer"
                            }`}
                        >
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col justify-between h-[150px]">
                                <h4 className="text-lg font-semibold mb-2">{work.title}</h4>
                                <p className="text-sm text-gray-600 mb-4">{work.description}</p>
                            </div>
                        </motion.div>
                    );

                    return work.isComingSoon ? (
                        <div key={index} onClick={(e) => e.preventDefault()}>{card}</div>
                    ) : (
                        <Link key={index} href={work.link}>{card}</Link>
                    );
                })}
            </div>
        </section>
    );
}
