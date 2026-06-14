import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [

    { name: "Java", level: 90, category: "languages" },
    { name: "Python", level: 95, category: "Language" },
    { name: "C", level: 80, category: "Language" },
    { name: "C++", level: 78, category: "Language" },



    { name: "HTML/CSS", level: 95, category: "WebDevelopment" },
    { name: "JavaScript", level: 85, category: "WebDevelopment" },
    { name: "React", level: 90, category: "WebDevelopment" },
    { name: "Node.js", level: 90, category: "WebDevelopment" },
    { name: "Express", level: 80, category: "WebDevelopment" },


    { name: "Data Structures & Algorithms", level: 95, category: "Core-Fundamentals" },
    { name: "Operating System", level: 85, category: "Core-Fundamentals" },
    { name: "OOPS", level: 90, category: "Core-Fundamentals" },
    { name: "Computer Networks", level: 90, category: "Core-Fundamentals" },
    { name: "DBMS", level: 80, category: "Core-Fundamentals" },


    { name: "MongoDB", level: 75, category: "DataBases" },
    { name: "SQL", level: 95, category: "DataBases" },


    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Figma", level: 80, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Google Colab", level: 80, category: "tools" },
    { name: "Docker", level: 85, category: "tools" }
];


const categories = ["all", "WebDevelopment", "Core-Fundamentals", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justofy-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button onClick={() => setActiveCategory(category)} key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>{category}</button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondar/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section >
    )
}