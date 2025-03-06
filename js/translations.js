export class Translate {
    constructor(path) {
        this.currentLanguage = localStorage.getItem('language') || 'en'; // Default to English if no language is saved
        this.path = path; // Path to translations JSON file
    }

    async translateTo(lang) {
        const response = await fetch(this.path);
        const translations = await response.json();
        return translations[lang];
    }

    async updateContent(lang, updateCallback) {
        const translations = await this.translateTo(lang);

        // Update navbar links
        document.querySelectorAll('.navbar-nav a').forEach(link => {
            const key = link.getAttribute('data-translate');
            if (translations[key]) {
                link.textContent = translations[key];
            }
        });

        // Call the provided callback to update page-specific content
        if (updateCallback) {
            updateCallback(translations);
        }

        // Save the selected language
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
    }

    changeLanguage(lang, updateCallback) {
        this.updateContent(lang, updateCallback);
    }

    initSavedLanguage(updateCallback) {
        document.addEventListener('DOMContentLoaded', () => {
            const savedLanguage = localStorage.getItem('language') || 'en';
            this.updateContent(savedLanguage, updateCallback);
        });
    }
}