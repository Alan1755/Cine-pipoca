document.querySelector('.menu-btn').addEventListener('click', () => {
    alert('calma lá, o bagui é estatico ainda');
});

document.querySelector('.search-btn').addEventListener('click', () => {
    alert('calma lá, o bagui é estatico ainda');
});

function searchMovies() {
    // Obtém o valor de pesquisa e converte para minúsculas
    const query = document.getElementById('search-bar').value.toLowerCase();
    
    // Seleciona todos os itens de filmes ou séries
    const items = document.querySelectorAll('.highlight-item');
    
    // Seleciona a mensagem de "nenhum resultado" e as categorias
    const noResultsMessage = document.getElementById('no-results-message');
    const genresSection = document.querySelector('.genres');
    
    // Contador de resultados
    let hasResults = false;
    
    // Itera sobre os itens e mostra/esconde com base na pesquisa
    items.forEach(item => {
        const title = item.querySelector('p').textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = "block"; // Exibe o item se corresponder
            hasResults = true; // Se achou algum item, marca como "tem resultado"
        } else {
            item.style.display = "none";  // Esconde o item se não corresponder
        }
    });

    // Se não encontrou resultados, mostra a mensagem
    if (!hasResults) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
    
    // Esconde as categorias enquanto o usuário digita
    if (query.length > 0) {
        genresSection.style.display = "none";
    } else {
        genresSection.style.display = "flex"; // Mostra novamente as categorias quando o campo de pesquisa está vazio
    }
}