// Desafio 1
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  return valorUm === true && valorDois === true;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let formulaArea = (base * height) / 2;
  return formulaArea;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4

function concatName(nomeItem) {
  // seu código aqui
  return `${nomeItem[nomeItem.length - 1]}, ${nomeItem[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(repeatMaxNumber) {
  // seu código aqui
  let max = Math.max(...repeatMaxNumber);
  let contador = 0;
  for (let i = 0; i < repeatMaxNumber.length; i += 1) {
    if (max === repeatMaxNumber[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } if (mouse === Math.abs(mouse - cat1) && mouse === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function generateFizzBuzz(numero) {
  if (numero % 15 === 0) {
    return 'fizzBuzz';
  }
  if (numero % 5 === 0) {
    return 'buzz';
  }
  if (numero % 3 === 0 && numero % 5 !== 0) {
    return 'fizz';
  }
  return 'bug!';
}
function fizzBuzz(lista) {
  let arrayNovo = [];
  for (let i = 0; i < lista.length; i += 1) {
    arrayNovo.push(generateFizzBuzz(lista[i]));
  }
  return arrayNovo;
}
// let numeros = [1, 2, 5, 15, 3];
// console.log(fizzBuzz(numeros))
// eu tentei de todas as formas refatorar o fizzbuzz - por esses 9 dias todos, encontrei uma solução no artigo
// https://dev.to/olivermensahdev/fizzbuzz-refactoring-challenge-with-open-closed-principle-4m42
// acabei pesquisando sobre fizzBuzz e como eu poderia refatorar o fizzBuzz - Nenhum codigo era igual ao da Trybe, e nem sei se é a mesma lingaugem, mas me fez entender um pouco o que devo estar fazendo de errado.
// ma deixo claro, eu eu tentei de ilimitadas formas refatorar esse codigo, ams empre acabava pegando apenas o primeiro elemento ou numa ordem que não era apropriada, e eu conseguiria reoslver essasituação de outras formas, mas isso levaria a mais codigos e funcções que eu precisasse refatorar
// eu até tenteu usar um:
// for(i=0; .... ){
// function fizzBuzz(numero[i]{
// .. O que vale é minha intenção - Mas ideia ruim.
// }}
// eu fiz ilimitadas pesquisas, mas não estava tendo a assertividade que procurava
// artigo que ele refatora uma versão parecida da function fizzBuzz
// mas peloq ue entendi, esse codigo é de um elemnto só, eu testei e ele só rodava o primeiro elemento,  entao eu precisei apena colocar um for

// vou comentar passo a passo do meu codigo aqui em baixo, já que, querendo ou não, ele foi uma releitura de logica

// pra refatorar precisamos criar repartições - então repartir o codigo em gerar um valor, um numero que pudesse fazer os calculos e retornar uma resposta, ao invés de dar push no array, ele apenas retorna. E eu precisava fazer isso sem usar o for, porque se não ele daria o mesmo erro de complexidade.
// function generateFizzBuzz(numero){
// if (numero % 3 === 0 && numero % 5 !== 0) {
//       return 'fizz';
//     }
// else if (numero % 5 === 0 && numero % 3 !== 0) {
//        return 'buzz';
//     }
// else if (numero % 15 === 0) { // um dos meus metodos de aprender é pagar e testar, escrevere  testar.. Eu percebi que eu precisava de if e else, sem o for, e que se eu apagasse condicionais como && e ||, meu codigo eria mais aceito pelo lnt..Pesquisei no google como poderia descorir um divisor em comum, e essa foi uma das formas. Tentei achar um divisor APENAs do 5 ou 3, e até achei um material que somava os numeros (para o 3) e tb que via se o os numeros terminassem com 5 ou 0(para o 5), mas isso levaria mais codigo e o lint iria sinalizar novamente.
//        return 'fizzBuzz';
//     }
// else { // no meu codigo inicial o else, não podia ser tirado, pois compretia na resposta, mas aqui ele aceitou, porque estava dando 6 de complexidade, e com a retiirada, agora  está perfeito
//       return 'bug!';
//     }
// }
// function fizzBuzz(lista) {
//   let arrayNovo = [];
//   for (let i = 0; i < lista.length; i += 1){
//   arrayNovo.push(generateFizzBuzz(lista[i])) ; // a parte diferente do meu codigo inicial, bem no link do site que eu falei, ele
// usa um codigo similar a arrayNovo.push(generateFizzBuzz(lista)), mas ele apenas pega o unico elemnto ou o primeiro elemento, se for array, eu precisaria de um for, e apesar de nao ter certeza se ele aceitaria dentro da function, porque quando eu coloquei em em cima da função ele não aceitou, na vdd, todo meu chanllenge.js deu erro. Eu testei, e rodou.
//   }
//  return arrayNovo;
// }
// AINDA ESTÁ DANDO COMEPLEXIDADE DE 6 DE 5 - eu apenas mudei a ordem o fizzbuzz, porque ai, ele nao iria interefir.
// Finalmente.
// Desafio 9
function encode(nomeEncode) {
  // seu código aqui
  let novoNome = nomeEncode
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return novoNome;
}
function decode(nomeDecode) {
  // seu código aqui
  let novoNome = nomeDecode
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return novoNome;
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
