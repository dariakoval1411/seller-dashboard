import { IconButton } from "@/shared/ui/atoms";
import { useTheme } from "@/features/theme/model/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      icon={theme === "light" ? "🌙" : "☀️"}
      onClick={toggleTheme}
      ariaLabel="Toggle theme"
    />
  );
};