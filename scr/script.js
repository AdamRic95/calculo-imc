function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado'); // Definindo a variável aqui

    // Validação de entrada
    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    // Classificação do IMC
    if (imc < 18.5) {
        classificacao = "Você está abaixo do peso.";
    } else if (imc < 24.9) {
        classificacao = "Seu peso está normal.";
    } else if (imc < 29.9) {
        classificacao = "Você está com sobrepeso.";
    } else if (imc < 34.9) {
        classificacao = "Você está com Obesidade grau I.";
    } else if (imc < 39.9) {
        classificacao = "Você está com Obesidade grau II (severa).";
    } else {
        classificacao = "Você está com Obesidade grau III (mórbida).";
    }

    resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>${classificacao}`;
    resultadoDiv.style.display = "block"; // Exibir resultado
}

function limparEntradas() {
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('resultado').style.display = "none";
}
