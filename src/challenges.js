// Desafio 1
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  if (valorUm === true && valorDois === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let formulaArea = (base * height)/2;
  return formulaArea 
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(" ")
}

// Desafio 4

function concatName(nomeItem) {
  // seu código aqui
  return nomeItem[nomeItem.length -1] + ', ' + nomeItem[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3 + ties*1
}

// Desafio 6
function highestCount(repeatMaxNumber) {
  // seu código aqui
  let max = Math.max(...repeatMaxNumber)
  let contador = 0;
   for (let i=0;i < repeatMaxNumber.length; i++){
     
   if (max === repeatMaxNumber[i]) {
      contador = contador + 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return "cat2";
  } else if (mouse == Math.abs(mouse - cat1) && mouse == Math.abs(mouse - cat2) ){
    return "os gatos trombam e o rato foge";
  }
  
}

// Desafio 8
function fizzBuzz(numero) {
  // seu código aqui
  let arrayVazio = [];
  for (let i = 0; i < numero.length; i++) {
    
    if (numero[i] % 3 === 0 && numero[i] % 5 !== 0) {
     arrayVazio.push("fizz");
      ;
    } else if (numero[i] % 5 === 0 && numero[i] % 3 === 1) {
      arrayVazio.push('buzz');
    } else if (numero[i] % 5 === 0 && numero[i] % 3 === 0) {
      arrayVazio.push('fizzBuzz');
    } else {
      arrayVazio.push('bug!');
    }
  }
  return arrayVazio;
}

// Desafio 9
function encode(nomeEncode) {
  // seu código aqui
  let novoNome = nomeEncode.replace(/a/g, "1").replace(/e/g, "2").replace(/i/g, "3").replace(/o/g, "4").replace(/u/g, "5")
return novoNome}
function decode(nomeDecode) {
  // seu código aqui
  let novoNome = nomeDecode.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u")
  return novoNome
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
