document.addEventListener("DOMContentLoaded", function() {
    const animasyonluElemanlar = document.querySelectorAll('.scroll-anim');

    const gozlemci = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('goster');
            }
        });
    }, {
        threshold: 0.1 
    });

    animasyonluElemanlar.forEach(eleman => {
        gozlemci.observe(eleman);
    });
});