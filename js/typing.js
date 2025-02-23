const start = "I'm";
const nameT = "DAVID HURTADO";
const career = "CONSULTANT & SOFTWARE ENGINEER";

function typeWord(wordElement, word, caretElement, delay, removeCaret = false) {
    wordElement.textContent = ""; // Clear content
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
        }
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    const nameText = document.getElementById('nameText');
    const careerText = document.getElementById('careerText');
    const startText = document.getElementById('startText');
    const startCaret = startText.nextElementSibling; // Getting caret from the DOM
    const nameCaret = nameText.nextElementSibling; // Getting caret from the DOM
    const careerCaret = careerText.nextElementSibling; // Getting caret from the DOM


    setTimeout(() => {
        typeWord(startText, start, startCaret, 100, true); // Typing name, remove caret after
    }, 1000);
    
    
    setTimeout(() => {
        typeWord(nameText, nameT, nameCaret, 100, true); // Typing name, remove caret after
    }, 2000);

    setTimeout(() => {
        typeWord(careerText, career, careerCaret, 100, true); // Typing career, caret continues blinking
    }, 5000);
});
