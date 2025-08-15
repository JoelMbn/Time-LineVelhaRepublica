const dica = document.getElementById('clicar-dica');
const legenda = document.querySelector('.legenda-icones');
const legendaDisplayOriginal = window.getComputedStyle(legenda).display; // guarda display original

document.querySelectorAll('.evento').forEach(evento => {
    evento.addEventListener('click', () => {
        // Dica desaparece para sempre
        if (dica) {
            dica.remove();
        }

        // Esconde legenda enquanto o modal estiver aberto
        if (legenda) {
            legenda.style.display = 'none';
        }

        const info = evento.getAttribute('data-info');
        const imgSrc = evento.getAttribute('data-img');

        const modalTexto = document.getElementById('modal-texto');
        modalTexto.innerHTML = '';

        if (imgSrc) {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = 'Imagem do evento';
            img.style.width = '100%';
            img.style.marginBottom = '15px';
            modalTexto.appendChild(img);
        }

        const texto = document.createElement('p');
        texto.textContent = info;
        modalTexto.appendChild(texto);

        document.getElementById('modal').style.display = 'block';
    });
});

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
    // Restaura o display original da legenda
    if (legenda) {
        legenda.style.display = legendaDisplayOriginal;
    }
}

document.getElementById('fechar').addEventListener('click', fecharModal);

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        fecharModal();
    }
});
