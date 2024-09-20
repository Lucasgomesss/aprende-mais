function converterMoedas() {
    valor = document.querySelector("#valor").value;
    moedaorigem = document.querySelector("#moedaorigem").value;
    moedafinal = document.querySelector("#moedafinal").value;

    cotacaoatual = {
        "Dólar Americano": { "Real Brasileiro": 5.42, "Euro": 0.90, "Franco Suíço": 0.85, "Libra Esterlina": 0.75 },
        "Euro": { "Real Brasileiro": 6.06, "Dólar Americano": 1.12, "Franco Suíço": 0.95, "Libra Esterlina": 0.84 },
        "Franco Suíço": { "Real Brasileiro": 6.41, "Dólar Americano": 1.18, "Libra Esterlina": 0.89, "Euro": 1.06 },
        "Libra Esterlina": { "Real Brasileiro": 7.20, "Dólar Americano": 1.33, "Franco Suíço": 1.12, "Euro": 1.19 },
        "Real Brasileiro": { "Dólar Americano": 0.18, "Euro": 0.17, "Franco Suíço": 0.16, "Libra Esterlina": 0.14 }
    };

    taxa = cotacaoatual[moedaorigem][moedafinal];
    resultadoconversao = valor * taxa;

    simboloorigem = ""
    simbolofinal = ""

    if (moedaorigem == "Dólar Americano") {
        simboloorigem = "USD"
    } else if (moedaorigem == "Euro") {
        simboloorigem = "EUR"
    } else if (moedaorigem == "Franco Suíço") {
        simboloorigem = "CHF"
    } else if (moedaorigem == "Libra Esterlina") {
        simboloorigem = "GBP"
    } else if (moedaorigem == "Real Brasileiro") {
        simboloorigem = "BRL"
    } 

    if (moedafinal == "Dólar Americano") {
        simbolofinal = "USD"
    } else if (moedafinal == "Euro") {
        simbolofinal = "EUR"
    } else if (moedafinal == "Franco Suíço") {
        simbolofinal = "CHF"
    } else if (moedafinal == "Libra Esterlina") {
        simbolofinal = "GBP"
    } else if (moedafinal == "Real Brasileiro") {
        simbolofinal = "BRL"
    } 
        
    resultadofinal = document.querySelector("#resultado");
    resultadofinal.innerText = `O valor de ${valor} ${simboloorigem} convertido de ${moedaorigem} para ${moedafinal} é de ${resultadoconversao}  ${simbolofinal}.`;
}