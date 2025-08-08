export function animationsInit() {
    const animatedItems = document.querySelectorAll('.animate-left, .animate-right, .animate-fade');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Елемент з’явився:', entry.target);
                entry.target.classList.add('animate-show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedItems.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            // Якщо елемент вже видно, показуємо одразу
            el.classList.add('animate-show');
        } else {
            observer.observe(el);
        }
    });
}