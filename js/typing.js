import { Translate } from './translations.js';

const path = 'json/translations.json'; // Path to translations JSON file for index.html
const translator = new Translate(path);

let typingTimeouts = []; // Store timeouts to clear them when language changes
window.isTyping = false; // Track if typing animation is running (exposed globally)

// Function to type out text
function typeWord(wordElement, word, caretElement, delay, removeCaret = false) {
    wordElement.textContent = ''; // Clear content
    caretElement.style.display = 'inline'; // Ensure caret is visible
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < word.length) {
            wordElement.textContent += word.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            if (removeCaret) {
                caretElement.style.display = 'none'; // Hide caret after typing is done
            }
            // Re-enable buttons after typing is complete
            if (wordElement.id === 'careerText') {
                window.isTyping = false;
                enableLanguageButtons();
            }
        }
    }, delay);
}

// Function to start typing animation
export function startTypingAnimation(translations) {
    const nameText = document.getElementById('nameText');
    const careerText = document.getElementById('careerText');
    const startText = document.getElementById('startText');

    // Check if elements exist
    if (!nameText || !careerText || !startText) {
        console.error('Typing elements not found in the DOM!');
        return;
    }

    const startCaret = startText.nextElementSibling; // Getting caret from the DOM
    const nameCaret = nameText.nextElementSibling; // Getting caret from the DOM
    const careerCaret = careerText.nextElementSibling; // Getting caret from the DOM

    // Clear existing text for typing animation
    startText.textContent = '';
    nameText.textContent = '';
    careerText.textContent = '';

    // Reset caret visibility
    document.querySelectorAll('.caret').forEach(caret => {
        caret.style.display = 'inline';
    });

    // Clear existing timeouts to avoid overlapping animations
    typingTimeouts.forEach(timeout => clearTimeout(timeout));
    typingTimeouts = [];

    // Disable buttons while typing
    window.isTyping = true;
    disableLanguageButtons();

    // Start typing animation
    typingTimeouts.push(
        setTimeout(() => {
            typeWord(startText, translations.welcome, startCaret, 100, true);
        }, 2000)
    );

    typingTimeouts.push(
        setTimeout(() => {
            typeWord(nameText, translations.name, nameCaret, 100, true);
        }, 3000)
    );

    typingTimeouts.push(
        setTimeout(() => {
            typeWord(careerText, translations.career, careerCaret, 100, true);
        }, 4500)
    );
}

// Function to disable language buttons
function disableLanguageButtons() {
    const buttons = document.querySelectorAll('.language-button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Function to enable language buttons
function enableLanguageButtons() {
    const buttons = document.querySelectorAll('.language-button');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

// Initialize with saved language
document.addEventListener('DOMContentLoaded', async () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const translations = await translator.translateTo(savedLanguage);
    startTypingAnimation(translations);
});

// Expose startTypingAnimation to global scope
window.startTypingAnimation = startTypingAnimation;