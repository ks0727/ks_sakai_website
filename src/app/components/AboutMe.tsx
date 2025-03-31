export function AboutMe(){
    {/* About セクション */}
    return(

        <section id="about" className="w-[60%] mx-auto px-4 py-20 pt-32">
        <h3 className="text-2xl font-bold mb-8 text-center">About Me</h3>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 text-left">
        {/* 丸い写真 */}
        <img
            src="/my-photo.jpg"
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
    );
};