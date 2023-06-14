// Função para verifica se o número é um quadrado perfeito


function verificarQuadradoPerfeito(numero) {

const raizQuadrada = Math.sqrt(numero); // Calcular a raiz quadrada do numero desejado 

return Number.isInteger(raizQuadrada); 

  }

  const numero = 25; // Número para ser verificado

  if (verificarQuadradoPerfeito(numero)) {
    console.log("É um quadrado perfeito"); 
  } else {
    console.log("Não é um quadrado perfeito"); 
  }