import { useLayoutEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState("dark");

  useLayoutEffect(() => {
    const classList = Array.from(document.documentElement.classList.values());
    if (classList.includes("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div
      className="text-slate-900 dark:text-white w-14 h-14 text-4xl flex items-center justify-center"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      )}
    </div>
  );
}
