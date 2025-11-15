"use client";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import DockBar from "./components/DockBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import WorkExperience from "./components/WorkExperience";

export default function Web2() {
    return (
        <div className="min-h-screen flex flex-col items-center relative px-4 xl:px-10">
            <div className="mb-8"><DockBar /></div>

            <div id="home"><Hero /></div>
            <div id="aboutme"><AboutMe /></div>
            <div id="tools"><Tools /></div>
            <div id="experience"><WorkExperience /></div>
            <div id="projects"><Projects /></div>

            <div id="contact" className="w-full md:w-[75%] xl:w-[50%]">
                <Contact />
            </div>
        </div>
    );
}
