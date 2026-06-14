import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "J.A.R.V.I.S.",
        description:
            "Built a voice-controlled AI assistant using Python, Whisper AI, Ollama, and Llama 3.2 to automate desktop tasks through natural language commands. Implemented speech recognition, AI-powered response generation, application control, web navigation, and file management within a scalable and modular architecture.",
        image: "/projects/project1.jpeg",
        tags: [
            "Python",
            "Whisper AI",
            "Llama 3.2",
            "Ollama",
            "SQLite",
            "AI Assistant",
        ],
        githubUrl: "https://github.com/RohitKumar-0045",
    },
    {
        id: 2,
        title: "AI Food Recipe Maker",
        description:
            "Developed an AI-powered recipe generation platform using Python, Streamlit, and LLM APIs to create personalized meal recommendations from available ingredients. Integrated real-time recipe generation, nutritional insights, and interactive user experiences through a scalable and intelligent application architecture.",
        image: "/projects/project2.png",
        tags: [
            "Python",
            "Streamlit",
            "Gemini AI",
            "MongoDB",
            "Generative AI",
            "LLM",
        ],
        githubUrl: "https://github.com/RohitKumar-0045",
    },
    {
        id: 3,
        title: "Social Media Platform",
        description:
            "Engineered a full-stack social media platform using React.js, Node.js, Express.js, and MongoDB, enabling users to create content and build connections. Implemented authentication, profile management, RESTful APIs, and responsive user interfaces within a scalable application architecture.",
        image: "/projects/project3.jpeg",
        tags: [
            "React.js",
            "Node.js",
            "MongoDB",
            "Clerk",
            "ImageKit",
            "Express.js",
        ],
        githubUrl: "https://github.com/RohitKumar-0045",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, scalability, and user
                    experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm card-hover flex flex-col"
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 ">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-relaxed ">
                                    {project.description}
                                </p>

                                {/* External Link */}
                                <div className="mt-6 flex justify-start">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/70 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/RohitKumar-0045" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};