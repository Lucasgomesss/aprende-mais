function sorteadorNumeros() {
    vinicial = document.querySelector("#vinicial").value;
    vfinal = document.querySelector("#vfinal").value;
    quantnumeros = document.querySelector("#quantnumeros").value;

    numeros = new Array()

	for(cont = 0; cont < quantnumeros; cont++){
		numeros[cont] =  Math.floor(Math.random() * (vfinal)+1);
	}

    resultadofinal = document.querySelector("#resultado");
    resultadofinal.innerText = `Quantidade de Números solicitados: ${quantnumeros} - Números Sorteados: ${numeros}.`;
}