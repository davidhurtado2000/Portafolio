window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY == 0) {
        navbar.classList.add('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-transparent');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const serviceContent = [
        "Transform your ideas into functional and dynamic web applications. Using the latest technologies in HTML, CSS, and JavaScript, I build robust applications that are tailored to your specific needs and goals.",
        "Create visually appealing and user-friendly designs that captivate your audience. From layout to interactive elements, I focus on delivering seamless and intuitive user experiences that keep users engaged.",
        "Ensure your systems run smoothly with comprehensive maintenance services. Whether it's troubleshooting software issues or performing hardware upgrades, I provide reliable solutions to keep your technology in top shape.",
        "Empower yourself with knowledge through expert consulting and teaching. Whether you're looking to improve your coding skills or need guidance on your next tech project, I offer personalized training and advice to help you succeed."
    ];

    const services = [
        {
            imgSrc: "../img/services/html.png",
            selectedImgSrc: "../img/services/html_selected.png",
            altText: "Web Application Development",
            title: "Web & Application Development"
        },
        {
            imgSrc: "../img/services/computer.png",
            selectedImgSrc: "../img/services/computer_selected.png",
            altText: "Design and User Experience",
            title: "Design and User Experience"
        },
        {
            imgSrc: "../img/services/maintenance.png",
            selectedImgSrc: "../img/services/maintenance_selected.png",
            altText: "Software and Hardware Maintenance",
            title: "Software/Hardware Maintenance"
        },
        {
            imgSrc: "../img/services/consulting.png",
            selectedImgSrc: "../img/services/consulting_selected.png",
            altText: "Consulting and Training",
            title: "Consulting and Training"
        }
    ];

    const servicesContainer = document.getElementById("services-container");
    const contentDiv = document.getElementById("content");

    if (!servicesContainer || !contentDiv) {
        console.error("Required DOM elements not found!");
        return;
    }

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
            // Update the content
            contentDiv.innerHTML = `
                <div class="row text-center mt-4">
                    <div class="col-12 col-xl-4 mx-auto">
                        <h2>${service.title}</h2>
                        <p class="service-info">${serviceContent[index]}</p>
                        <a href="contact.html" class="btn btn-primary mt-3" id="button">Contact Me</a>
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
});