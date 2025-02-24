window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY == 0) {
        navbar.classList.add('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-transparent');

    }
});


document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            imgSrc: "../img/services/application.png",
            altText: "Web Application Development",
            title: "Web & Application Development"
        },
        {
            imgSrc: "../img/services/application.png",
            altText: "Design and User Experience",
            title: "Design and User Experience"
        },
        {
            imgSrc: "../img/services/application.png",
            altText: "Software and Hardware Maintenance",
            title: "Sofware/Hardware     Maintenance"
        },
        {
            imgSrc: "../img/services/application.png",
            altText: "Consulting and Training",
            title: "Consulting and Training"
        }
        // Add more services here if needed
    ];

    const servicesContainer = document.getElementById("services-container");

    services.forEach(service => {
        const serviceDiv = document.createElement("div");
        serviceDiv.className = "col-3";

        serviceDiv.innerHTML = `
            <div class="col section-model">
                <div class="row">
                    <div class="col-12">
                        <img src="${service.imgSrc}" class="img-thumbnail" alt="${service.altText}"
                            style="background-color: transparent; border: none;" width="150">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h4>${service.title}</h4>
                    </div>
                </div>
            </div>
        `;

        servicesContainer.appendChild(serviceDiv);
    });
});