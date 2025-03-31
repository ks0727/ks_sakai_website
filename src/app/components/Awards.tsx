export function Awards(){
    {/* 受賞セクション */}
    return (
        <section id="awards" className="w-[60%] mx-auto px-4 py-20 pt-32">
        <h3 className="text-2xl font-bold mb-8 text-center">Awards</h3>
        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full mb-6">
                <h4 className="text-lg font-semibold">工学部長賞</h4>
                <p className="text-sm text-gray-500 mt-2">Mar. 2025</p>
            </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full mb-6">
            <h4 className="text-lg font-semibold">グローバル萩海外留学奨励賞</h4>
            <p className="text-sm text-gray-500 mt-2">Aug. 2022</p>
        </div>
        </section>
    );
};