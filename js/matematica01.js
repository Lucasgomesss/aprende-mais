function calculoIMC() {
    peso = document.querySelector("#peso").value;
    altura = document.querySelector("#altura").value;

    imc = peso / (altura * altura)
    resultadoIMC = ""

    if (imc < 18.5) {
        resultadoIMC = "Abaixo do Peso"
    } else if (imc <= 24.9) {
        resultadoIMC = "Peso Normal"
    } else if (imc <= 29.9) {
        resultadoIMC = "Sobrepeso"
    } else if (imc <= 34.9) {
        resultadoIMC = "Obesidade Grau 1"
    } else if (imc <= 39.9) {
        resultadoIMC = "Obesidade Grau 2"
    } else if (imc > 40) {
        resultadoIMC = "Obesidade Grau 3"
    }

    nome = document.querySelector("#nome").value;
    resultadofinal = document.querySelector("#resultado");
    resultadofinal.innerText = `${nome}, seu IMC é de ${imc} e você está classificado na categoria: ${resultadoIMC}.`;
}