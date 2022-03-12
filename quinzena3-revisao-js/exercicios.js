// EXERCÍCIO 01
let arrayInvertida = []
for (let i = array.length - 1; i >= 0; i--) {
    console.log(arrayInvertida)
    return arrayInvertida}

// EXERCÍCIO 02
var numeros = [2, 4, 6, 8]; 

var quadrados = numeros.map(function(item){
    return Math.pow(item, 2); 
})
    document.write(quadrados);  

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function retornaNumerosPares(array) {
  let novoArr = []
  for (let numeros of array) {
    if (numeros % 2 === 0) {
      novoArr.push(numeros)
    }
  }
  return novoArr
}
  
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 05
const array = [4, 8, 16]

function numerosPares (arraydeNumeros) {
    const primeiro = arraydeNumeros[0]
    const segundo = arraydeNumeros[1]
    const terceiro = arraydeNumeros[2]

    arrayDeNumeros = [arrayDeNumeros.length] = [primeiro, segundo, terceiro]
    return arrayDeNumeros
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3

function retornaExpressoesBooleanas() {
  const expressoesBooleanas = [booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1), !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]
  return expressoesBooleanas
}

}

// EXERCÍCIO 07
function retornaNumerosPares(n) {
  let retornaNumerosPares = [];
  for(let i = 0; n.length < n; i++) {
      if(i % 2 === 0){
          retornaNumerosPares.push(i);
      }
  }
  return retornaNumerosPares;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a === b && b === c) {
    return "Equilátero"
  } else if (a === b || b === c) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
let maior
  let menor
  {

  if (num1 > num2) {
    maior = num1
    menor = num2

  } else {
    menor = num1
    maior = num2
  }

  let divisivel = (maior % menor) === 0

  let valordif = (maior - menor)

  let objeto =
  {
    maiorNumero: maior,
    maiorDivisivelporMenor: divisivel,
    diferenca: valordif

  }
  return objeto

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return [array[array.length - 2], array[1]]
}



// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array
}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "Bastardos Inglorios",
    ano: 2009,
    diretor: "Quentin Tarantino",
    atores: ["Christoph Waltz", "Melanie Laurent", "Brad Pitt"],
} 

}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
      nome: "Bastardos Inglorios",
      ano: 2009,
      diretor: "Quentin Tarantino",
      atores: ["Christoph Waltz", "Melanie Laurent", "Brad Pitt"],
  }  
  return 'Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${diretor.nome} e estrelado por ${atores.nome}' 
 }


// EXERCÍCIO 14

function criaRetangulo(lado1, lado2) {
  return novoObjeto = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: lado1 * lado2,
  }
}