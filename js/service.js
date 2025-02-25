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

    const contentMap = {
        "div1": `<div class="row "><div class="col-6"><h1>${services[0].title}</h1><span class="service-info">${serviceContent[0]}</span><br><a href="contact.html" class="button my-5" >Contact Me</a></div><div class="col-6 d-flex justify-content-center align-items-center"><img src="${services[0].imgSrc}" class="img-thumbnail content-image"></div></div>`,
        "div2": `<div class="row "><div class="col-6"><h1>${services[1].title}</h1><span class="service-info">${serviceContent[1]}</span><br><a href="contact.html" class="button my-5">Contact Me</a></div><div class="col-6 d-flex justify-content-center align-items-center"><img src="${services[1].imgSrc}" class="img-thumbnail content-image"></div></div>`,
        "div3": `<div class="row "><div class="col-6"><h1>${services[2].title}</h1><span class="service-info">${serviceContent[2]}</span><br><a href="contact.html" class="button my-5">Contact Me</a></div><div class="col-6 d-flex justify-content-center align-items-center"><img src="${services[2].imgSrc}" class="img-thumbnail content-image"></div></div>`,
        "div4": `<div class="row "><div class="col-6"><h1>${services[3].title}</h1><span class="service-info">${serviceContent[3]}</span><br><a href="contact.html" class="button my-5" >Contact Me</a></div><div class="col-6 d-flex justify-content-center align-items-center"><img src="${services[3].imgSrc}" class="img-thumbnail content-image"></div></div>`,
    };

    services.forEach((service, index) => {
        const serviceDiv = document.createElement("div");
        serviceDiv.className = "clickable-div col-3";
        serviceDiv.id = `div${index + 1}`;

        serviceDiv.innerHTML = `
            <div class="col section-model">
                <div class="row">
                    <div class="col-12 my-4">
                        <img src="${service.imgSrc}" class="img-thumbnail service-img" alt="${service.altText}" width="150">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="h4 h4-custom">${service.title}</p>
                    </div>
                </div>
            </div>
        `;

        servicesContainer.appendChild(serviceDiv);

        const sectionModel = serviceDiv.querySelector(".section-model");
        const imgElement = serviceDiv.querySelector(".service-img");

        sectionModel.addEventListener("click", () => {
            document.querySelectorAll(".section-model").forEach(d => d.classList.remove("selected"));
            document.querySelectorAll(".service-img").forEach(img => {
                const index = [...img.closest(".clickable-div").parentElement.children].indexOf(img.closest(".clickable-div"));
                img.src = services[index].imgSrc; // Reset all images
            });

            sectionModel.classList.add("selected");
            imgElement.src = service.selectedImgSrc; // Change the selected image

            const id = serviceDiv.id;
            contentDiv.innerHTML = contentMap[id];
        });
    });
});
