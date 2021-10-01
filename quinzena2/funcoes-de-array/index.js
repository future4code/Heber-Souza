 // Exercicio
 
 //1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

 // a) Crie um novo array que contenha apenas o nome dos doguinhos

 // b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
 
 // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


 // a)
 
 const pets = [
     { nome: "Lupin", raca: "Salsicha"},
     { nome: "Polly", raca: "Lhasa Apso"},
     { nome: "Madame", raca:"Poodle"},
     { nome: "Quentinho", raca: "Salsicha"},
     { nome: "Fluffy", raca: "Poodle"},
     { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((pet, indice, array) => {
     return pet.nome
 })

 // b) 

 const dogs= [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca:"Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ] 

 const petsRaca = pets.map(function(item) {
     return  Object.assign(item, {raca: item.raca})
 })

 // c) 

 function filtroPetPoodles(item) {
     return item.raca === "Poodle"
 }

 const listarPetPoodles = pets.filter(filtroPetPoodles)

 console.log(listarPetPoodles)

 function imprimeMensagem() {
     console.log (`Voce ganhou um cupom de 10% para tosar o/a ${filtroPetPoodles}`)
 }
