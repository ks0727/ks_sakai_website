
export function NavLinks({ onClick }: { onClick?: () => void }) {
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
        </li>
        <li>
            <a href="#awards" className={linkClass} onClick={onClick}>
                Awards
                <span className={underlineClass}></span>
            </a>
        </li>
        <li>
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