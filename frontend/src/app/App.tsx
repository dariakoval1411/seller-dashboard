import { AppRouter } from "@/app/routes/AppRouter";
import { useTheme } from "@/features/theme/model/ThemeContext";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={`app-root theme-${theme}`}>
      <AppRouter />
    </div>
  );
}