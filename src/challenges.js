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
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
