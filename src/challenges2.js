// Desafio 10
function techList(listaTech, name) {
  // seu código aqui
let listaNova = [];
let object = {};
listaTech = listaTech.sort();
if (listaTech.length === 0){
  return "Vazio!";
}

  for(let i = 0; i < listaTech.length;i++){
 object = {
tech: listaTech[i],
name: name};

listaNova.push(object);

}

return listaNova;
}

// Desafio 11
function generatePhoneNumber(lista) {
  // seu código aqui
   //numero que vou usar pra validar numeros de vezes que aparece
   let repeatNumber = 0;
   // validar se é maior que ou menor que 11 digitos
   if (lista.length > 11 || lista.length < 11 || lista.length === 0) {
     return "Array com tamanho incorreto.";
   }
 
 //verificando se é igual a 11 digitos
  else {
  let repeatNumber = 0;
 for (let index = 0; index < lista.length; index++) {
   
 for (let i = 0; i < lista.length; i++) {
   for (let j = i - 1; j < lista.length; j++) {
  if (lista[j] === lista[i]) {
    repeatNumber = repeatNumber + 0.20; 
    
    };}
 } 
 for (let indexDois = 0; indexDois < lista.length; indexDois++) {
  if (lista[indexDois] < 0 || lista[indexDois] > 9 ) {
    return "não é possível gerar um número de telefone com esses valores";
    
  }
  
}


     if (lista[index] < 0 || lista[index] > 9 || repeatNumber >= 3) {
       return "não é possível gerar um número de telefone com esses valores";
       
     }
     else {
       return `(${lista[0]}${lista[1]}) ${lista[2]}${lista[3]}${lista[4]}${lista[5]}${lista[6]}-${lista[7]}${lista[8]}${lista[9]}${lista[10]}`;
     }
       
   }
    }
   } 

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
