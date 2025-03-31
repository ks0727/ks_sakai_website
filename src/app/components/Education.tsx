export function Education(){
    {/* 学歴セクション */}
    return (
        <section id="education" className="w-[60%] mx-auto px-4 py-20 pt-32">
        <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full mb-6">
            <h4 className="text-lg font-semibold">Tohoku University</h4>
            <p className="text-sm text-gray-600">Graduate School of Information Sciences</p>
            <p className="text-sm text-gray-600">M.S. in Computer Science</p>
            <p className="text-sm text-gray-500 mt-2">Oct. 2024 – Sep. 2026 (expected)</p>
        </div>

        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full mb-6">
            <h4 className="text-lg font-semibold">University of North Carolina</h4>
            <p className="text-sm text-gray-600">School of Engineering</p>
            <p className="text-sm text-gray-600">As an exchange student</p>
            <p className="text-sm text-gray-500 mt-2">Aug. 2022 – May. 2023</p>
            </div>
        </div>

        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full mb-6">
            <h4 className="text-lg font-semibold">Tohoku University</h4>
            <p className="text-sm text-gray-600">School of Engineering</p>
            <p className="text-sm text-gray-600">B.S. in Mechanical and Aerospace Engineering</p>
            <p className="text-sm text-gray-500 mt-2">Apr. 2020 – Sep. 2024</p>
            </div>
        </div>

        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full">
            <h4 className="text-lg font-semibold">Namiki Secondary School</h4>
            <p className="text-sm text-gray-600">General Course</p>
            <p className="text-sm text-gray-500 mt-2">Apr. 2014 – Mar. 2020</p>
            </div>
        </div>
        </section>
    );
};