document.addEventListener('DOMContentLoaded', function () {
    let navbarToggle = document.querySelector('[data-collapse-target="sticky-navar"]');
    let navbarCollapse = document.querySelector('[data-collapse="sticky-navar"]');

    navbarToggle.addEventListener('click', function () {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;

        this.setAttribute('aria-expanded', !expanded);
        navbarCollapse.classList.toggle('h-0', expanded);

        // Ajoutez la hauteur dynamique en fonction du contenu du menu
        navbarCollapse.style.height = expanded ? '0px' : `${navbarCollapse.scrollHeight}px`;
    });
});
