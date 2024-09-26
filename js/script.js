$(document).ready(function() {
    inicializar();
});

function inicializar() {
    $("#terms").empty();
    $("#descriptions").empty();
    $(".mensagem").empty();
    gerarOpcoes();
}

let quantidadepares;

function gerarOpcoes() {
    // Definindo as opções em um Map
    let opcoes = new Map([
        ["Morango", "Fruta"],
        ["Mesa", "Objeto"],
        ["Peixe","Animal"],
        ["Gol Bolinha", "Carro"]
    ]);

    // Convertendo o Map em arrays separados
    let termosArray = [];
    let descricoesArray = [];
    
    opcoes.forEach((descricao, termo) => {
        termosArray.push(termo);
        descricoesArray.push(descricao);
    });

    // Criando os elementos para termos e descrições
    termosArray.forEach((termo, i) => {
        $(".terms").append('<div class="term col cols-md-4" draggable="true" id="term' + i + '">' + termo + '</div>');
    });

    descricoesArray.forEach((descricao, i) => {
        $(".descriptions").append('<div class="description col cols-md-4" id="desc' + i + '">' + descricao + '</div>'); 
    });

    // Embaralhando apenas as divs finais no DOM
    embaralharElementos('.terms');
    embaralharElementos('.descriptions');

    // Selecionando os termos e descrições para adicionar eventos
    const terms = document.querySelectorAll('.term');
    const descriptions = document.querySelectorAll('.description');

    // Adicionando eventos de drag nos termos
    terms.forEach(term => {
        term.addEventListener('dragstart', dragStart);
        term.addEventListener('dragend', dragEnd);
    });

    // Adicionando eventos de drop nas descrições
    descriptions.forEach(description => {
        description.addEventListener('dragover', dragOver);
        description.addEventListener('drop', drop);
        description.addEventListener('dragleave', dragLeave);
    });

    quantidadepares = terms.length;
}

// Função para embaralhar elementos no DOM sem perder a correspondência
function embaralharElementos(selector) {
    const container = document.querySelector(selector);
    const elements = Array.from(container.children);
    // Embaralhando os elementos
    for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Troca de elementos
        [elements[i], elements[j]] = [elements[j], elements[i]];
    }
    // Removendo os elementos do DOM e re-adicionando na ordem embaralhada
    elements.forEach(element => {
        container.appendChild(element);
    });
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('over');
}

function dragLeave(e) {
    e.target.classList.remove('over');
}

function drop(e) {
    e.preventDefault();
    e.target.classList.remove('over');
    const termId = e.dataTransfer.getData('text/plain');
    const term = document.getElementById(termId);
    const descriptionId = e.target.id;


    // Verifica se a correspondência está correta
    if (pares[termId] === descriptionId) {
        e.target.innerText = term.innerText;
        term.style.display = 'none';
        $('.mensagem').empty();
        $('.mensagem').append('<h3 style="color:green">Resposta Correta!</h3>');
    } else {
        $('.mensagem').empty();
        $('.mensagem').append('<h3 style="color:red">Resposta Errada!</h3>');
    }
}

function testar(e){
    const pares = {
        'term0': 'desc0',
        'term1': 'desc1',
        'term2': 'desc2',
        'term3': 'desc3'
    };
}
