import Image from "next/image";
import AboutImage from "@/public/myImage.jpeg";
import { GraduationCap, LaptopMinimal, SquareArrowOutUpRight } from "lucide-react";

export default function AboutMe() {
    const educationData = [
        {
            title: "Bachelor in Information Technology",
            duration: "Sep 2020 - Sep 2024",
            institute: "Al-Quds University, Palestine",
            link: "https://www.alquds.edu/",
        },
        {
            title: "Exchange Student Program",
            duration: "Jan 2022 - June 2022",
            institute: "Malardalens University, Vasteras, Sweden",
            link: "https://www.mdu.se/",
        },
    ];

    return (
        <div className="min-h-screen px-4 py-4 flex flex-col items-center gap-8 mt-6 mb-20">

            {/* Topbar */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-[80%] xl:w-[100%] p-4 border-1 border-card-border shadow-xl/10 rounded-2xl">
                <div>
                    <Image
                        src={AboutImage}
                        alt="Profile"
                        width={160}
                        height={160}
                        className="rounded-full border border-card-border aspect-square object-cover w-32 h-32 sm:w-40 sm:h-40"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <h1 className="text-4xl font-bold">Abdurhman Abuhelal</h1>
                    <p className="text-muted-foreground text-lg">AI Developer @ PathLLM.ai</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {["AI Developer", "Fullstack Engineer", "Backend Engineer", "Spring Boot", "React", "Python"].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-sm bg-muted border border-card-border rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col xl:flex-row gap-4 justify-center items-center xl:items-stretch">

                {/* Professional Summary */}
                <div className="bg-muted/20 p-6 rounded-xl border border-card-border w-full md:w-[80%] xl:w-[70%] shadow-xl/10">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <LaptopMinimal /> Professional Summary
                    </h2>
                    <p className="text-base leading-relaxed">
                        AI Developer and Fullstack Engineer from Palestine with a strong foundation in backend development and a passion for building scalable, innovative solutions. Currently working at PathLLM.ai, where I design and develop modular platforms for managing 70+ AI agents, integrating tools and frameworks like CrewAI and LangChain to enhance agent capabilities.
                        <br /><br />
                        Previously, I worked as a Fullstack Engineer at FALAK Solutions, developing scalable React components with TypeScript and implementing state management using Redux. I also have extensive experience as a Backend Engineer at EXALT Technologies, where I developed and maintained RESTful APIs using Spring Boot, designed relational database schemas with Hibernate and JPA, and implemented robust authentication mechanisms with Spring Security and JWT.
                        <br /><br />
                        My journey includes an AI Engineer Internship at Robert Bosch GmbH in Germany, where I utilized LangChain and Django for LLM engineering and developed a Chrome extension with efficient RAG techniques. I graduated from Al-Quds University with a Bachelor's in Information Technology, ranking as the top student in my major with a GPA of 93.5% and making the President's Honor List for all semesters. I also founded the AQU Coding Club and participated in an exchange program at Malardalens University in Sweden.
                    </p>
                </div>

                {/* Education */}
                <div className="bg-muted/20 p-6 rounded-xl border border-card-border shadow-xl/10 w-full md:w-[80%] xl:w-[70%] flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <GraduationCap /> Education
                    </h2>

                    {educationData.map((edu, idx) => (
                        <div
                            key={idx}
                            className="border border-card-border rounded-2xl p-6 m-2 group"
                        >
                            <div className="flex flex-col xl:flex-row justify-between xl:items-center">
                                <h3 className="text-xl font-semibold">{edu.title}</h3>
                                <p className="text-sm text-nowrap underline underline-offset-2 xl:no-underline">
                                    {edu.duration}
                                </p>
                            </div>
                            <a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="leading-relaxed text-sm underline-offset-4 hover:underline inline-flex items-center gap-1 text-primary transition-all duration-200 font-sub text-text-sub"
                            >
                                {edu.institute}
                                <SquareArrowOutUpRight
                                    size={16}
                                    className="opacity-100 duration-200"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


