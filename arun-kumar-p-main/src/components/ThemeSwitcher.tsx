import { useTheme, Theme } from "./ThemeProvider";
import { Flame, Sun, Leaf, Snowflake } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes: { id: Theme; icon: any; label: string }[] = [
    { id: "theme-red", icon: Flame, label: "Red Theme" },
    { id: "theme-green", icon: Leaf, label: "Green Theme" },
    { id: "theme-orange", icon: Sun, label: "Orange Theme" },
    { id: "theme-blue", icon: Snowflake, label: "Blue Theme" },
    
    
  ];

  return (
    <div className="flex items-center gap-1.5 bg-secondary/50 border border-border/50 backdrop-blur-md rounded-full p-1 shadow-inner">
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`p-1.5 rounded-full transition-all duration-300 relative ${
              isActive
                ? "bg-primary/20 text-primary scale-110 shadow-sm border border-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
            }`}
            title={t.label}
          >
            <Icon className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
