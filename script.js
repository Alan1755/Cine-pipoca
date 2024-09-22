document.querySelector('.menu-btn').addEventListener('click', () => {
    alert('calma lá, o bagui é estatico ainda');
});

document.querySelector('.search-btn').addEventListener('click', () => {
    alert('calma lá, o bagui é estatico ainda');
});

function searchMovies() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const items = document.querySelectorAll('.item');
    const noResultsMessage = document.getElementById('no-results-message');
    const genresSection = document.querySelector('.genres');
    const categories = document.querySelectorAll('.category'); // Seleciona as categorias
    let hasResults = false;

    categories.forEach(category => {
        const categoryItems = category.querySelectorAll('.item');
        let categoryHasResults = false; // Para controlar se a categoria tem resultados

        categoryItems.forEach(item => {
            const title = item.querySelector('p').textContent.toLowerCase();
            if (title.includes(query)) {
                item.style.display = "block";
                categoryHasResults = true; // Se algum item corresponde, a categoria tem resultados
            } else {
                item.style.display = "none";
            }
        });

        // Se a categoria não tem resultados, esconde o h2
        category.querySelector('h2').style.display = categoryHasResults ? "block" : "none";
    });

    // Verifica se há resultados em geral
    hasResults = Array.from(items).some(item => item.style.display === "block");

    noResultsMessage.style.display = hasResults ? "none" : "block";
    genresSection.style.display = query.length > 0 ? "none" : "flex";
}

