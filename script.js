window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-image');
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('fade-in');
        }
    });
});
