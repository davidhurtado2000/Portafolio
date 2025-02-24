window.addEventListener('scroll', function () {
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
        "div1": `<div class="row"><div class="col-6"><h1>Title 1</h1><span>Content for Div 1</span></div><div class="col-6">Second Section with Image 1</div></div>`,
        "div2": `<div class="row"><div class="col-6"><h1>Title 2</h1><span>Content for Div 2</span></div><div class="col-6">Second Section with Image 2</div></div>`,
        "div3": `<div class="row"><div class="col-6"><h1>Title 3</h1><span>Content for Div 3</span></div><div class="col-6">Second Section with Image 3</div></div>`,
        "div4": `<div class="row"><div class="col-6"><h1>Title 4</h1><span>Content for Div 4</span></div><div class="col-6">Second Section with Image 4</div></div>`
    };

    services.forEach((service, index) => {
        const serviceDiv = document.createElement("div");
        serviceDiv.className = "clickable-div col-3";
        serviceDiv.id = `div${index + 1}`;

        serviceDiv.innerHTML = `
            <div class="col section-model">
                <div class="row">
                    <div class="col-12 my-4">
                        <img src="${service.imgSrc}" class="img-thumbnail service-img" alt="${service.altText}"
                            style="background-color: transparent; border: none;" width="150">
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
