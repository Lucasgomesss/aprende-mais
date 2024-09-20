function gastoCombustivel() {
    origem = document.querySelector("#origem").value;
    destino = document.querySelector("#destino").value;
    distancia = document.querySelector("#distancia").value;
    capacidade = document.querySelector("#capacidade").value;
    valorlitro = document.querySelector("#valorlitro").value;

    quantidade = distancia / capacidade;
    gasto = quantidade * valorlitro;

    resultadofinal = document.querySelector("#resultado");
    resultadofinal.innerText = `Você precisará de ${quantidade} litros de combustível e gastará R$${gasto} para se deslocar de ${origem} para ${destino}.`;
}