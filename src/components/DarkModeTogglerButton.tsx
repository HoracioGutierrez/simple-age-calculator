"use client"
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Lightbulb } from "lucide-react"
import { useTheme } from "next-themes";

export default function DarkModeTogglerButton() {

    const { theme, setTheme } = useTheme()

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button asChild variant="link" size="icon" className={cn("cursor-pointer hover:text-primary-foreground")} onClick={handleToggle}>
            <Lightbulb className="w-6 h-6"/>
        </Button>
    )
}