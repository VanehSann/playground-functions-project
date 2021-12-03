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
function generatePhoneNumber() {
  // seu código aqui
  if (lista.length > 11) {
    console.log("Array com tamanho incorreto.");
   }
   
  for (let i = 0; i < lista.length; i++) {
     if (lista[i] < 0 || lista[i] > 9) {
      console.log("não é possível gerar um número de telefone com esses valores");
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
