function SkillCircle({ name, level }: { name: string; level: number }) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;
    return (
        <div className="flex flex-col items-center space-y-2">
        <svg width="100" height="100">
            <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
            />
            < circle
                cx="50"
                cy="50"
                r={radius}
                stroke="black"
                strokeWidth="8"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
            />
        </svg>
        <span className="text-sm font-medium text-center">{name}</span>
        </div>
    );
}

export function Skills(){
    return (
            <section id="skills" className="w-[60%] mx-auto px-4 py-20 pt-32">
            <h3 className="text-2xl font-bold mb-12 text-center">Skills</h3>

            {/* カテゴリごとに分けて表示 */}
                    <div className="space-y-16">

                    {/* Programming Languages */}
                    <div>
                    <h4 className="text-xl font-semibold text-center mb-6">Programming Languages</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        {[
                        { name: "C / C++", level: 80 },
                        { name: "Python", level: 80 },
                        { name: "HTML / CSS", level: 50 },
                        { name: "JavaScript / TypeScript", level: 40 },
                        ].map((skill) => (
                        <SkillCircle key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                    </div>

                    {/* Frameworks */}
                    <div>
                    <h4 className="text-xl font-semibold text-center mb-6">Frameworks / Libraries</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        {[
                        { name: "Next.js", level: 30 },
                        { name: "Django", level: 30 },
                        { name: "PyTorch", level: 80 },
                        ].map((skill) => (
                        <SkillCircle key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                    </div>

                    {/* Others */}
                    <div>
                    <h4 className="text-xl font-semibold text-center mb-6">Others</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        {[
                        { name: "Git", level: 60 },
                        { name: "AWS", level: 40 },
                        { name: "Google Cloud", level: 30 },
                ].map((skill) => (
                <SkillCircle key={skill.name} name={skill.name} level={skill.level} />
                ))}
                </div>
                </div>

            {/* Languages */}
            <div>
            <h4 className="text-xl font-semibold text-center mb-6">Languages</h4>
                <div className="grid grid-cols-2 gap-6 justify-items-center">
                    {[
                    { name: "Japanese", level: 100 },
                    { name: "English", level: 80 },
                    ].map((skill) => (
                    <SkillCircle key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
};

