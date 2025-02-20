const nameT = "David Hurtado Gomez";
const career = "Junior Software Engineer";
const nameWord = document.getElementById('wordname');
const careerWord = document.getElementById('wordcarrer');

function typeWord(wordElement, word) {
    wordElement.textContent = ""; // Clear the content before typing
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < word.length) {
            wordElement.textContent += word.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

// Typing effect for name
setTimeout(() => typeWord(nameWord, nameT), 500);

// Typing effect for career
setTimeout(() => typeWord(careerWord, career), 3000);