import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700"
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};