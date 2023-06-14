// Script ppara calcular fatorial de 1 a 10

function calcularFatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  for (let i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é ${calcularFatorial(i)}`);
  }
  