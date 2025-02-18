//Highlight activation
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const tocLinks = document.querySelectorAll('.toc a');
    const fixedContent = document.getElementById('fixed-content');
    const mainContainer = document.querySelector('.ctn-main');
    const offsetContent = document.getElementById('offset-content');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');

        if (rect.top >= 0 && rect.top < window.innerHeight / 2 ) {
            tocLinks.forEach(link => {
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

function aboutInfo(){
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

document.addEventListener('DOMContentLoaded', function() { 
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
            description: "Youtube downloader built with Electron colaborated with Weston Rivers (Student of theCoderSchool). It allows users to download videos. It uses libraries like FFmpeg and YouTube-dl for fast and reliable downloads",
            link: "https://github.com/davidhurtado2000/Klipperz-Academy-System"
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
        projectDiv.onclick = () => location.href = project.link;

        projectDiv.innerHTML = `
            <div class="col-3 text-center project-img">
                <img src="${project.imgSrc}" class="rounded mx-auto d-block" alt="${project.altText}" height="100" width="150">
            </div>
            <div class="col-9">
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


//Init functions for info
aboutInfo();