const themeToggle = document.querySelector('.theme-toggle');

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save theme preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});