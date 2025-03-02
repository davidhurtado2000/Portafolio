// services.js
import { Translate } from './translations.js';

const path = '../json/services.json'; // Path to translations JSON file for services.html
const translator = new Translate(path);

// Define a callback to update page-specific content
function updateServicesContent(translations) {
    // Update services title
    document.querySelector('[data-translate="servicesTitle"]').textContent = translations.servicesTitle;

    // Update service content
    const serviceContent = [
        translations.service1,
        translations.service2,
        translations.service3,
        translations.service4
    ];

    const services = [
        { imgSrc: "../img/services/html.png", selectedImgSrc: "../img/services/html_selected.png", altText: translations.service1Title, title: translations.service1Title },
        { imgSrc: "../img/services/computer.png", selectedImgSrc: "../img/services/computer_selected.png", altText: translations.service2Title, title: translations.service2Title },
        { imgSrc: "../img/services/maintenance.png", selectedImgSrc: "../img/services/maintenance_selected.png", altText: translations.service3Title, title: translations.service3Title },
        { imgSrc: "../img/services/consulting.png", selectedImgSrc: "../img/services/consulting_selected.png", altText: translations.service4Title, title: translations.service4Title }
    ];

    const servicesContainer = document.getElementById("services-container");
    const contentDiv = document.getElementById("content");

    if (!servicesContainer || !contentDiv) {
        console.error("Required DOM elements not found!");
        return;
    }

    // Clear existing content
    servicesContainer.innerHTML = '';
    contentDiv.innerHTML = '';

    // Render services
    services.forEach((service, index) => {
        const serviceDiv = document.createElement("div");
        serviceDiv.className = "clickable-div col-sm-12 col-md-6 col-lg-3 text-center";
        serviceDiv.id = `div${index + 1}`;

        serviceDiv.innerHTML = `
            <div class="section-model p-3">
                <img src="${service.imgSrc}" class="img-thumbnail service-img" alt="${service.altText}" width="100">
                <p class="h5 mt-2">${service.title}</p>
            </div>
        `;

        servicesContainer.appendChild(serviceDiv);

        serviceDiv.addEventListener("click", () => {
            // Remove .selected class and reset images for all sections
            document.querySelectorAll(".section-model").forEach(section => {
                section.classList.remove("selected");
                const img = section.querySelector("img");
                const serviceIndex = Array.from(servicesContainer.children).indexOf(section.parentElement);
                img.src = services[serviceIndex].imgSrc; // Reset to default image
            });

            // Add .selected class to the clicked section
            const clickedSection = serviceDiv.querySelector(".section-model");
            clickedSection.classList.add("selected");

            // Switch to the selected image
            const clickedImage = clickedSection.querySelector("img");
            clickedImage.src = service.selectedImgSrc;

            // Update the content
            contentDiv.innerHTML = `
                <div class="row text-center mt-4">
                    <div class="col-12 col-xl-4 mx-auto">
                        <h2>${service.title}</h2>
                        <p class="service-info">${serviceContent[index]}</p>
                        <a href="contact.html" class="btn btn-primary mt-3" id="button">${translations.contactMe}</a>
                    </div>
                    <div class="col-12 col-xl-4 d-flex justify-content-center">
                        <img src="${service.imgSrc}" class="img-fluid content-image">
                    </div>
                </div>
            `;

            // Scroll to the button
            document.getElementById("button").scrollIntoView({ behavior: "smooth" });
        });
    });
}

// Initialize with saved language
translator.initSavedLanguage(updateServicesContent);

// Expose changeLanguage to global scope for button clicks
window.changeLanguage = (lang) => translator.changeLanguage(lang, updateServicesContent);