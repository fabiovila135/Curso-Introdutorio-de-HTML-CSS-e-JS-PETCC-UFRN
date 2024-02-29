let perguntasAcertadas = localStorage.getItem('perguntasAcertadas')

function comparar() {
    let q1 = document.querySelector('input[name="pergunta"]:checked')
    
    if(q1) {
        if (q1.value === "b") {
            alert("Resposta Correta!");
            perguntasAcertadas++;
        } else {
            alert("Resposta incorreta!");
        }
    } else {
        alert("Pelo amor de Taylor Swift, responda a pergunta!");
        return;
    }

    document.getElementById("a").classList.add("incorreta");
    document.getElementById("b").classList.add("correta");
    document.getElementById("c").classList.add("incorreta");
    document.getElementById("d").classList.add("incorreta");

    document.getElementById("link").classList.remove("escondido");

    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
        radio.disabled = true;
    });

    localStorage.setItem('perguntarAcertadas', perguntasAcertadas);
}