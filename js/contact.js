import { Translate } from "./translations.js";

const path = "../json/contact.json";
const translator = new Translate(path);

//Creates the navbar effect background when scroll
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navabar-custom");

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-solid");
            navbar.classList.remove('navbar-transparent');
        } else{
            navbar.classList.remove('navbar-solid');
            navbar.classList.add("navbar-transparent");
        }
    }
});

function updateContent(translations){
    document.querySelector('.text').textContent = translations.contactTitle;
}

translator.initSavedLanguage(updateContent);

window.changeLanguage = (lang) => translator.changeLanguage(lang, updateContent);


document.addEventListener("DOMContentLoaded", async function() {
    translator.initSavedLanguage(updateContent);
});