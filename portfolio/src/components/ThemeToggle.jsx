import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";

        document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
        );

        localStorage.setItem("theme", newTheme);
        setIsDarkMode(newTheme === "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={cn(
                "fixed top-4 right-4 md:top-6 md:right-6",
                "z-[999]",
                "p-3 rounded-full",
                "bg-background/80 backdrop-blur-md",
                "border border-border",
                "shadow-lg",
                "transition-all duration-300",
                "hover:scale-110 hover:shadow-xl",
                "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
                <Moon className="h-5 w-5 text-blue-600" />
            )}
        </button>
    );
};

export default ThemeToggle;