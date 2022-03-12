// Exericio 1

// Escreva uma função que recebe um array como parâmetro e retorne este array invertido. Obs: evite o uso da função reverse().
//const array = ["0", "8", "23", "16", "10", "15", "41", "12", "13"]

let arrayInvertida = []
for (let i = array.length - 1; i >= 0; i--) {
    console.log(arrayInvertida)
    return arrayInvertida
}

// Exercicio 2
var numeros = [2, 4, 6, 8]; 

var quadrados = numeros.map(function(item){
    return Math.pow(item, 2); 
})
    document.write(quadrados);   



// Exercicio 3




// Exercicio 4 

function retornoMaiorNumero(array){
    const arrayDeNumeros = []
    let maior = 0
    for (let num of arrayDeNumeros){
        if (num > maior) {
            maior = num  
        }
    }
    return arraydeNumeros
    
}



    
// Exercicio 5

const array = [4, 8, 16]

function numerosPares (arraydeNumeros) {
    const primeiro = arraydeNumeros[0]
    const segundo = arraydeNumeros[1]
    const terceiro = arraydeNumeros[2]

    arrayDeNumeros = [arrayDeNumeros.length] = [primeiro, segundo, terceiro]
    return arrayDeNumeros
}

// Exercicio 6

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



// Exercicio 7
function retornaNumerosPares(n) {
    let retornaNumerosPares = [];
    for(let i = 0; n.length < n; i++) {
        if(i % 2 === 0){
            retornaNumerosPares.push(i);
        }
    }
    return retornaNumerosPares;
}

// Exercicio 8

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

// Exercicio 9

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

// Exercicio 10

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





// Exercicio13
function imprimeChamada() {
 const filme = {
     nome: "Bastardos Inglorios",
     ano: 2009,
     diretor: "Quentin Tarantino",
     atores: ["Christoph Waltz", "Melanie Laurent", "Brad Pitt"],
 }  
 return 'Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${diretor.nome} e estrelado por ${atores.nome}' 
}

