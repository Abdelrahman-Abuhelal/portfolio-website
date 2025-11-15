'use client'
import { BriefcaseBusiness, Calendar, MapPin } from 'lucide-react'

const experiences = [
    {
        title: 'AI Developer',
        company: 'PathLLM.ai',
        location: 'United States, Silicon Valley',
        duration: 'Dec 2024 - Present',
        description: [
            'Designed a modular platform for managing 70+ AI agents, ensuring scalability and stability',
            'Enhanced agent capabilities by integrating tools and exploring frameworks like CrewAI and LangChain',
            'Optimized LLM prompt precision using structured templates and dynamic context injection to reduce ambiguity and enhance accuracy',
            'Enhanced modularity in AI agents by developing the agentic platform to connect diverse agents and AIs through unified input-output messages'
        ],
        technologies: ['Python', 'LangChain', 'CrewAI', 'LLM', 'AI Agents']
    },
    {
        title: 'Fullstack Engineer',
        company: 'FALAK Solutions',
        location: 'Palestine',
        duration: 'Sep - Dec 2024',
        description: [
            'Designed and developed scalable React Components with clean code for a modern enterprise system',
            'Utilized TypeScript to ensure robust, type-safe codebases and enhance application scalability',
            'Implemented state management using Redux and integrated backend APIs to enable efficient data flow',
            'Responsible for reviewing UI bugs and ensuring adherence to standards and high-quality user interfaces',
            'Responsible for hotfixes on backend APIs for the ERP using Spring Boot, Hibernate and PostgreSQL'
        ],
        technologies: ['React', 'TypeScript', 'Redux', 'Spring Boot', 'Hibernate', 'PostgreSQL']
    },
    {
        title: 'Backend Engineer',
        company: 'EXALT Technologies',
        location: 'Palestine',
        duration: 'Jan 2021 - Sep 2024 (21 months)',
        description: [
            'Developed and maintained RESTful APIs using Spring Boot for internal backend projects at EXALT',
            'Designed a relational database schema using Hibernate and JPA for the systems, which involved mapping over 50 entities to SQL tables',
            'Created efficient queries that optimized data retrieval',
            'Implemented robust authentication and authorization mechanisms in Spring Security, including JWT',
            'Worked on a secure React routing mechanism for the portals and created the components and UI pages',
            'Conducted unit testing on all RESTful APIs using JUnit, achieving 70% test coverage for service layers',
            'Collaborated with a team of frontend developers to integrate these APIs into the React-based application',
            'Engaged in daily scrum meetings to ensure project alignment and team collaboration'
        ],
        technologies: ['Spring Boot', 'Hibernate', 'JPA', 'PostgreSQL', 'JWT', 'Spring Security', 'React', 'JUnit']
    },
    {
        title: 'AI Engineer Intern',
        company: 'Robert Bosch GmbH',
        location: 'Germany, On-site',
        duration: 'June 2023 - Sep 2023 (3 months)',
        description: [
            'Utilized frameworks such as LangChain and Django for LLM engineering',
            'Developed a Chrome extension with efficient retrieval-augmented generation (RAG) techniques'
        ],
        technologies: ['Django', 'LangChain', 'Python', 'Chrome Extension', 'RAG']
    }
];

export default function WorkExperience() {
    return (
        <section className="min-h-screen px-1 sm:px-4 py-4 flex flex-col items-center gap-10 mt-6 mb-20">
            {/* Title with dash */}
            <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-left whitespace-nowrap px-3">
                    Professional Experience
                </h2>
                <div className="hidden sm:flex flex-1 border-t border-card-border"></div>
            </div>

            {/* Experience Cards */}
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl flex flex-col gap-8 mt-4">
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="border border-card-border rounded-2xl p-6 sm:p-8 bg-muted/20 hover:bg-muted/30 transition-all duration-300 shadow-xl/10"
                    >
                        <div className="flex flex-col gap-4">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                                        <BriefcaseBusiness size={24} className="text-primary" />
                                        {exp.title}
                                    </h3>
                                    <p className="text-xl text-primary font-semibold mt-1">{exp.company}</p>
                                </div>
                            </div>

                            {/* Location and Duration */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    <span>{exp.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    <span>{exp.duration}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="text-base leading-relaxed">{item}</li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-card-border">
                                {exp.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm bg-muted border border-card-border rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

