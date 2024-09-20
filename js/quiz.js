function resultado() {
    acertos = 0;

    for (cont = 1; cont <= 10; cont++) {
        resposta = document.querySelector(`input[name="questao${cont}"]:checked`);
        if (resposta && resposta.value === '1') {
            acertos++;
        }
    }

    nome = document.querySelector("#nome").value;
    resultadofinal = document.querySelector("#resultado");
    resultadofinal.innerText = `Parabéns ${nome}! Você acertou ${acertos} questões.`;
}