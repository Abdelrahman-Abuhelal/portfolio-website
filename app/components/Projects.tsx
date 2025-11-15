'use client'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import sampleImg from '@/public/sample.png'
import portfolioImg from '@/public/portfolioImg.png'
import homeLabImg from '@/public/homeLab.png'
import crypto_wallet_1 from '@/public/crypto_wallet_1.png'
import crypto_wallet_2 from '@/public/crypto_wallet_2.png'
import type { StaticImageData } from 'next/image';


const projects = [
    {
        title: 'Next-Edu: AI Learning Companion',
        description:
            'AI Learning Companion for Palestinian Students. A comprehensive educational platform powered by AI to enhance learning experiences and provide personalized educational support for students in Palestine.',
        stack: ['Next.js', 'AI', 'TypeScript', 'React'],
        image: sampleImg,
        github: 'https://github.com/Abdelrahman-Abuhelal/next-edu',
        live: '#',
    },
    {
        title: 'Training Management Platform – EXALT Technologies',
        description:
            'A secure web application powered by LLM capabilities to manage training progress and materials through different portals for HR, Supervisors, and Trainees. Features include JWT authentication, role-based authorization, task management, form creation, and skill tracking. Built with Spring Boot backend and React frontend.',
        stack: ['Spring Boot', 'React', 'MySQL', 'JWT', 'Spring Security', 'Material UI'],
        image: sampleImg,
        github: 'https://github.com/Abdelrahman-Abuhelal/Training-Management-Platform',
        live: 'https://www.loom.com/share/aa6cf05960cf4d38827b2fcefc7f8700',
    },
    {
        title: 'Snake-GPT – Bosch Internship',
        description:
            'SNAKE (Strategic Neural Analysis and Knowledge Enhancement) - A Chrome extension that generates user stories for project requirements based on page context using open-source large language models. Features RAG techniques with LangChain, ChromaDB for embeddings, and a Flask backend. Developed during internship at Robert Bosch GmbH.',
        stack: ['Django', 'LangChain', 'Python', 'Chrome Extension', 'RAG', 'ChromaDB', 'Flask'],
        image: sampleImg,
        github: 'https://github.com/Abdelrahman-Abuhelal/Snake-GPT',
        live: '#',
    },
];

// Slideshow component
function ProjectSlideshow({ images, alt }: { images: (StaticImageData | string)[]; alt: string }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [fading, setFading] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!paused && images.length > 1) {
            intervalRef.current = setInterval(() => {
                setFading(true);
                setTimeout(() => {
                    setIndex((i) => (i + 1) % images.length);
                    setFading(false);
                }, 400); // fade duration
            }, 4000); // 4 seconds per image
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [paused, images.length]);

    if (!images.length) return null;
    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full"
            style={{
                aspectRatio: '16/10',
                minHeight: '180px',
                maxHeight: '320px',
                overflow: 'hidden',
                background: '#18181b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                className={`absolute inset-0 transition-opacity duration-400 ease-in-out
                    ${fading ? 'opacity-0' : 'opacity-100'}
                `}
                key={index}
                style={{
                    willChange: 'opacity',
                }}
            >
                <Image
                    src={images[index]}
                    alt={alt}
                    fill
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }}
                    className="rounded-xl shadow-xl transition"
                    sizes="(max-width: 640px) 90vw, 50vw"
                />
            </div>
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`block w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400/50'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    return (
        <section className="min-h-screen px-1 sm:px-4 py-4 flex flex-col items-center gap-10 mt-6 mb-20">
            {/* Title with dash */}
            <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-left whitespace-nowrap px-3">
                    Featured Projects
                </h2>
                <div className="hidden sm:flex flex-1 border-t border-card-border"></div>
            </div>

            {/* Projects */}
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl flex flex-col gap-16 mt-4">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`flex flex-col-reverse md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}
items-center gap-4 sm:gap-8 border border-transparent hover:border-card-border 
rounded-2xl p-2 sm:p-4 box-border transition-all duration-300 w-full`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <ProjectSlideshow
                                images={Array.isArray(project.image) ? project.image : [project.image]}
                                alt={project.title}
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <p className="text-sm text-purple-400 uppercase tracking-widest">Featured Project</p>
                            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>
                            <ul className="flex flex-wrap gap-3 text-sm text-gray-400">
                                {project.stack.map((tech, i) => (
                                    <li className='border border-card-border p-1 px-3 rounded-full' key={i}>{tech}</li>
                                ))}
                            </ul>
                            <div className="flex gap-4 mt-2">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <Github className="w-5 h-5 text-text-sub hover:text-text-hero transition-colors duration-200" />
                                    </a>
                                )}
                                {project.live && (
                                    <div className='mx-2'>
                                        <a href={project.live} target="_blank" rel="noreferrer">
                                            <ExternalLink className="w-5 h-5 text-text-sub hover:text-text-hero transition-colors duration-200" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
