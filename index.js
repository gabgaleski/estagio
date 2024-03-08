// 1)
function sum() {
  const indice = 13;
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k++;
    soma += k;
  }

  console.log(soma);
}
sum() // retorna 91

// 2)

function fibonacci(num) {
  if (num === undefined || isNaN(num)) {
    return console.log('Por favor, insira um número')
  }
  let fibonacciArray = [0, 1];
  let len = fibonacciArray.length;

 for (let index = 0; fibonacciArray[len - 1] <= num; index++ ) {
  const nextFib = fibonacciArray[len - 1] + fibonacciArray[len - 2]
  fibonacciArray.push(nextFib);
  len = fibonacciArray.length;
 }
 if (fibonacciArray.includes(num)) {
  return console.log(`O numero ${num} pertence a sequencia de fibonacci`)
 }

  return console.log(`O numero ${num} não pertence a sequencia de fibonacci`)
}

fibonacci(13) // retorna "O numero 13 pertence a sequencia de fibonacci"

// 3)

// a)  1, 3, 5, 7, "9"  Resposta: A logica é o incremento de 2 em 2, assim o proximo elemento foi o 9
// b) 2, 4, 8, 16, 32, 64, "128" Resposta: A logica é a multiplicação por 2, assim o proximo elemento foi o 128
// c) 0, 1, 4, 9, 16, 25, 36, "49" Resposta: A logica é o incremento do quadrado do numero, assim o proximo elemento foi o 49 seguindo a sequencia de 1x1 = 1, 2x2 = 4, 3x3 = 9, 4x4 = 16, 5x5 = 25, 6x6 = 36, 7x7 = 49
// d) 4, 16, 36, 64, "100" Resposta: A logica é a multiplicação do quadrado do numero por 4, assim o proximo elemento foi o 100 seguindo a sequencia de 2x2 = 4, 4x4 = 16, 6x6 = 36, 8x8 = 64, 10x10 = 100
// e) 1, 1, 2, 3, 5, 8, "13" Resposta: A logica é a soma dos dois ultimos numeros, assim o proximo elemento foi o 13
// f) 2, 10, 12, 16, 17, 18, 19, "200" Resposta: A logica é que todos os numeros começam com a letra D, sendo assim o proximo elemento foi o 200


// 4)

// Eu ligaria o interruptor 1 e esperaria aproximadamente 5 minutos, entao desligaria o interruptor 1 e ligaria o interruptor 2,
// e entraria em uma das salas, se a lampada estiver acesa ela pertence ao interruptor 2, e se ela estiver apagada e fria, ela pertence ao interruptor 3 e se ela estiver apagada e quente, ela pertence ao interruptor 1. Ao saber qual interruptor pertence a uma das lampadas, basta ligar um dos outros 2 interruptores que sobraram e entrar na proxima sala, se a lampada estiver acesa, ela pertence ao interruptor que foi ligado, e se ela estiver apagada e fria, ela pertence ao interruptor que sobrou.

// 5) 

function reverseString(string) {
  if (!string) {
    return console.log('Por favor, insira uma string')
  }

  let reversedString = '';
  const lastIndex = string.length - 1;
  for (let index = lastIndex; index >= 0; index--) {
    reversedString += string[index];
  }
  console.log(reversedString);
}

reverseString('String Invertida') // retorna "aditrevnI gnirtS"