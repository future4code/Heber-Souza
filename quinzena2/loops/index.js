     // Exercicio

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// c) Por fim, imprima o array com os nomes dos bichinhos no console

let bichos = Number(prompt("Quantos bichinhos você tem?"))
let nPets = [bichos]
if (bichos <= 0) {
    console.log("Que pena! Você pode adotar um pet")
} else {
    nPets.push(prompt("Digite o nome de seus pets"))
}

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
   // a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    //b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    //c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    //d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
   // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

   let arrayOriginal=[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]
   imprimiValorOriginal => {
       for (const numero of arrayOriginal){
           return numero}
           console.log(numero)
   }

   let arrayOriginal=[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]
   const numerosDivididosPorDez = (arrayOriginal) => {
       let numerosDivididosPorDez = -infinity

       for (let numeroDividido of arrayOriginal){
           if (numeroDividido / arrayOriginal)
           arrayOriginal = numeroDividido 
       }
   }
    