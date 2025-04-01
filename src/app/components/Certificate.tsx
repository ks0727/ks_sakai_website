export function Certificate(){
    //資格セクション
    return (
        <section id="certificate" className="w-[60%] mx-auto px-4 py-20 pt-32">
        <h3 className="text-2xl font-bold mb-8 text-center">Certificate</h3>
        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-200 w-full mb-6">
                <h4 className="text-lg font-semibold">AWS認定クラウドプラクティショナー</h4>
                <p className="text-sm text-gray-500 mt-2">Dec. 2024</p>
            </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-200 w-full mb-6">
            <h4 className="text-lg font-semibold">統計検定準1級</h4>
            <p className="text-sm text-gray-500 mt-2">Dec. 2024</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-200 w-full mb-6">
            <h4 className="text-lg font-semibold">TOEIC 930</h4>
            <p className="text-sm text-gray-500 mt-2">Oct. 2023</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-200 w-full mb-6">
            <h4 className="text-lg font-semibold">SOLIDWORKS CAD Design Associate</h4>
            <p className="text-sm text-gray-500 mt-2">Apr. 2023</p>
        </div>
        </section>
    );
}