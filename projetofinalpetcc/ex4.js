let respostaCorreta= 'Debut';

function selecionarAlternativa(alternativaSelecionada) { 
    let alternativas = document.querySelectorAll('.alternativa_filha');
    for (let i = 0; i < alternativas.length; ++i) {
        alternativas[i].classList.remove('destaque');
    }
    alternativaSelecionada.classList.add('destaque');

    var texto = document.getElementsByClassName('destaque');
    resp.innerHTML = texto;
}


function comparar() {
    var texto = document.getElementsByClassName('destaque')
    
    if(texto === respostaCorreta) {
        resp.innerHTML = "Correto!"
    }
}