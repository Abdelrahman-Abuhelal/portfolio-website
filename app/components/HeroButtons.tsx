"use client"
export default function HeroButtons() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="flex gap-2">
            <button className="border cursor-pointer px-4 py-2 rounded-md transition-colors ease-out duration-500" onClick={() => scrollToSection('projects')}>Projects</button>
            <a href="https://docs.google.com/document/d/10oBTZc3pV6dRiCzodu1wxb8cQlgW1QWM6DqK2abBCfI/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                <button className="border cursor-pointer px-4 py-2 rounded-md transition-colors ease-out duration-500">View Resume</button>
            </a>
        </div>
    )


}
