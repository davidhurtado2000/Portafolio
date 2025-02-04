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