//Highlight activation
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const tocLinks = document.querySelectorAll('.toc a');

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
});

const aboutContent = [
    "I'm a passionate <strong>Software Engineer</strong> with a strong foundation in full-stack development, specializing in <strong>Java, JavaScript, Python, and SQL</strong>. With a background in <strong>computer engineering</strong> and hands-on experience in <strong>web development, database management, and cloud computing</strong>, I thrive on building scalable and efficient software solutions.",
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