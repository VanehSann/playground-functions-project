// Desafio 10
function techList(listaTech, nome) {
  // seu código aqui
  let listaNova = [];
  let object = {};
  listaTech = listaTech.sort();
  if (listaTech.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < listaTech.length; i += 1) {
    object = {
      tech: listaTech[i],
      name: nome };

    listaNova.push(object);
  }
  return listaNova;
}
// Desafio 11
function generatePhoneNumber(lista) {
  // seu código aqui
  if (lista.length > 11 || lista.length < 11 || lista.length === 0) {
    return 'Array com tamanho incorreto.';
  }
  let repeatNumber = 0;
  for (let i = 0; i < lista.length; i += 1) {
    for (let j = i - 1; j < lista.length; j += 1) {
      if (lista[j] === lista[i]) {
        repeatNumber += 0.20;
      }
    }
  }
  for (let indexDois = 0; indexDois < lista.length; indexDois += 1) {
    if (lista[indexDois] < 0 || lista[indexDois] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index] < 0 || lista[index] > 9 || repeatNumber >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${lista[0]}${lista[1]}) ${lista[2]}${lista[3]}${lista[4]}${lista[5]}${lista[6]}-`
    + `${lista[7]}${lista[8]}${lista[9]}${lista[10]}`;
}
// let lista = [1, 2, 3, 4, 5, 6, 9, 9, 9, 0, -1];
// console.log(generatePhoneNumber(lista))
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function segundaFunc(string) {
  let numb = string.match(/\d+/g);
  let result = 0;
  for (let i = 0; i < numb.length; i += 1) {
    result += Number(numb[i]);
  }
  return result;
}
function hydrate(string) {
  let segunda = segundaFunc(string);
  for (let k = 1; k < 10; k += 1) {
    if (segunda === 1) {
      return '1 copo de água';
    }
    if (segunda === k) {
      return `${k} copos de água`;
    }
  }
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
