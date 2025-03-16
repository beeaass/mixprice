export function initThemeToggle() {
    const themeToggle = document.getElementById("themeToggle") as HTMLDivElement;
    const toggleTheme = () => {
        const newTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
        themeToggle.classList.toggle('dark', newTheme === "dark");
    };

    document.documentElement.dataset.theme = localStorage.getItem("theme") || "light";
    themeToggle.classList.toggle('dark', document.documentElement.dataset.theme === "dark");
    themeToggle.onclick = toggleTheme;
}
