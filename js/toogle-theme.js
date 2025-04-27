document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-switcher-grid'); // Un solo botón ahora
    const htmlElement = document.documentElement; // El elemento <html>
    const storageKey = 'theme-preference';
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.style.colorScheme = 'dark';
            themeButton.classList.add('night-theme');
            localStorage.setItem(storageKey, 'dark');
        } else if (theme === 'light') {
            htmlElement.style.colorScheme = 'light';
            themeButton.classList.remove('night-theme');
            localStorage.setItem(storageKey, 'light');
        } else if (theme === 'system') {
            htmlElement.style.colorScheme = '';
            themeButton.classList.remove('night-theme'); // Asegurarse de que no esté la clase
            localStorage.removeItem(storageKey);
        }
    }

    // Función para alternar entre dark y light
    function toggleTheme() {
        const currentPreference = localStorage.getItem(storageKey) || defaultTheme;
        const nextTheme = currentPreference === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    }

    // Event listener para el botón
    themeButton.addEventListener('click', toggleTheme);

    // Aplicar el tema inicial al cargar la página
    const savedTheme = localStorage.getItem(storageKey);
    const initialTheme = savedTheme || defaultTheme;

    applyTheme(initialTheme);
});