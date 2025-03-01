document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll with offset function
    function smoothScrollWithOffset(event) {
        const targetId = this.getAttribute('href') || this.getAttribute('data-target');

        // Check if the link points to a section on the same page (e.g., #about)
        if (targetId.startsWith('#')) {
            event.preventDefault(); // Prevent default anchor behavior only for same-page links

            const targetSection = document.querySelector(targetId); // Find the target section
            if (targetSection) {
                const offset = 100; // Adjust this value for the desired space at the top
                const targetPosition = targetSection.offsetTop - offset; // Calculate the scroll position with offset

                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // If the link points to another page (e.g., view/services.html), allow default behavior
    }

    // Add event listeners to navbar links
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', smoothScrollWithOffset);
    });

    // Add event listeners to TOC links
    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', smoothScrollWithOffset);
    });

    // Add event listener to the scroll prompt div
    const scrollPromptDiv = document.querySelector('.col-12.middle-bottom');
    if (scrollPromptDiv) {
        scrollPromptDiv.addEventListener('click', smoothScrollWithOffset);
    }
});

// Highlight activation for sections
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const tocLinks = document.querySelectorAll('.toc a');
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const fixedContent = document.getElementById('fixed-content');
    const mainContainer = document.querySelector('.ctn-main');
    const offsetContent = document.getElementById('offset-content');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');

        // Adjust the offset for highlighting (e.g., 100px from the top)
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            // Highlight TOC links
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });

            // Highlight navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    const mainRect = mainContainer.getBoundingClientRect();
    if (mainRect.top <= 0) {
        fixedContent.classList.add('active');
        offsetContent.classList.add('active');
    } else {
        fixedContent.classList.remove('active');
        offsetContent.classList.remove('active');
    }
});

function aboutInfo() {
    const aboutContent = [
        "I'm a passionate <strong>Software Engineer</strong> with a strong foundation in full-stack development, specializing in <strong>Java, JavaScript, PHP, Python and SQL</strong>. With a background in <strong>computer engineering</strong> and hands-on experience in <strong>web development, database management, and cloud computing</strong>, I thrive on building scalable and efficient software solutions.",
        "Throughout my career, I’ve worked on diverse projects, from designing <strong>user authentication systems</strong> to developing <strong>data-driven applications</strong>. My expertise extends to <strong>React.js, Bootstrap, and backend technologies</strong> that power modern web applications. I’m also skilled in <strong>AI model deployment and cloud infrastructure</strong>, having obtained multiple industry-recognized certifications.",
        "I’m always eager to tackle new challenges and push the boundaries of my technical skills. Whether it’s <strong>optimizing performance, learning new frameworks, or collaborating on innovative projects</strong>, I strive to deliver impactful solutions. As I continue to grow in the tech industry, my goal is to contribute to cutting-edge software that enhances user experiences and drives business success."
    ];

    const aboutSection = document.getElementById('about-section');

    aboutContent.forEach(text => {
        const div = document.createElement("div");
        div.className = "about-text";
        div.innerHTML = text;
        aboutSection.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            title: "Klipperz Academy System",
            imgSrc: "img/Klip_Academy.png",
            altText: "Klipperz Academy",
            description: "Class management system designed with XAMPP, PHP, HTML, CSS, and JavaScript. This system streamlines registration and enhances data security with secure user authentication.",
            link: "https://github.com/davidhurtado2000/Klipperz-Academy-System"
        },
        {
            title: "Downstream",
            imgSrc: "img/Downstream.png",
            altText: "Downstream",
            description: "Youtube downloader built with Electron collaborated with Weston Rivers (Student of theCoderSchool). It allows users to download videos. It uses libraries like FFmpeg and YouTube-dl for fast and reliable downloads",
            link: "https://github.com/StrataBytes/Downstream"
        },
        {
            title: "Fact Checker Discord Bot",
            imgSrc: "img/discord.png",
            altText: "Fact Checker",
            description: "A discord bot that checks facts based on a given topic using a Wikipedia API. Made with Shiven Singh (Student of theCoderSchool).",
            link: "https://github.com/ShivenSinghTheDeveloper/windows-bot-template-main"
        }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "row pjt-section mt-4 mb-5";
        projectDiv.style.cursor = "pointer";
        projectDiv.onclick = () => window.open(project.link, '_blank');

        projectDiv.innerHTML = `
            <div class="col-md-3 col-12 text-center project-img">
                <img src="${project.imgSrc}" class="img-fluid rounded" alt="${project.altText}">
            </div>
            <div class="col-md-9 col-12">
                <div>
                    <span class="project-title">${project.title}</span>
                </div>
                <div class="my-1 exp-text">
                    <span>${project.description}</span>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectDiv);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const experiences = [
        {
            period: "2022 - Present",
            title: "Code Instructor - theCoderSchool Centennial",
            description: "Conduct weekly, semi-private coding sessions for high school and college students, focusing on languages such as Python, JavaScript, Java, and C++. Students engage in a wide range of projects, including web development, chatbots, mobile applications, and game design. By collaborating with instructors nationwide, Staying updated with the latest teaching methods and technologies. My flexible teaching style adapts to student needs, continuously integrating new programming techniques.",
            skills: ["React", "JavaScript", "PHP", "Python", "Lua", "C++", "C#", "HTML", "CSS", "Java", "SQL"]
        },
        {
            period: "2023 - Present",
            title: "Jr. Software Engineer - Klipperz Barbershop",
            description: "I designed and implemented a class management system using XAMPP, PHP, HTML, CSS, and JavaScript, which significantly improved the academy's operational efficiency by streamlining registration and attendance tracking. By implementing secure user authentication, I enhanced data security. Collaborating with stakeholders, I gathered system requirements and delivered tailored solutions to improve class scheduling and administrative tasks.",
            skills: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "SQL"]
        }
        // Add more experiences here
    ];

    const experienceContainer = document.getElementById("experience-container");

    experiences.forEach(experience => {
        const experienceDiv = document.createElement("div");
        experienceDiv.className = "row";

        experienceDiv.innerHTML = `
            <div class="col-3 text-center">
                <span>${experience.period}</span>
            </div>
            <div class="col-9">
                <div>${experience.title}</div>
                <div class="my-1 exp-text">
                    <span>${experience.description}</span>
                </div>
                <div class="col-12 mt-3">
                    <div class="row">
                        ${experience.skills.map(skill => `<div class="col-3 lang-section">${skill}</div>`).join('')}
                    </div>
                </div>
            </div>
        `;

        experienceContainer.appendChild(experienceDiv);
    });
});


window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY == 0) {
        navbar.classList.add('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-transparent');

    }
});

//Init functions for info
aboutInfo();