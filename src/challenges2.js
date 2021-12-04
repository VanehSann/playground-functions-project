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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC)){
    return true
  }
else{return false}
  
  
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
//criando um array com os numeros tipo string da frase
//Por exemplo, aplicando /\d+/ em "123abc" encontra "123" - developer.mozilla.org
// Without the g flag, it'll only test for the first. - https://stackoverflow.com/
  let numb = string.match(/\d+/g);
let result = 0;
for (let i = 0; i < numb.length; i++) {
  if (numb[i] == "1") {
    result += 1;
  }
  if (numb[i] == "2") {
    result += 2;
    
  }
  if (numb[i] == "3") {
    result += 3;
    
  }
  if (numb[i] == "4") {
    result += 4;
    
  }
  if (numb[i] == "5") {
    result += 5;
   
  }
  if (numb[i] == "6") {
    result += 6;
  
  }
  if (numb[i] == "7") {
    result += 7;
   
  }
  if (numb[i] == "8") {
    result += 8;
  
  }
  if (numb[i] == "9") {
    result += 9;
   
  }
   }
  if (result == "1") {
    return '1 copo de água';
    
   
  }
  if (result == "2") {
    return '2 copos de água';
    
  }
  if (result == "3") {
    return '3 copos de água';
    
  }
  if (result == "4") {
    return '4 copos de água';
    
  }
  if (result == "5") {
    return '5 copos de água';
   
  }
  if (result == "6") {
    return '6 copos de água';
  
  }
  if (result == "7") {
    return '7 copos de água';
   
  }
  if (result == "8") {
    return '8 copos de água';
  
  }
  if (result == "9") {
    return '9 copos de água';
   
  }

  


}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
