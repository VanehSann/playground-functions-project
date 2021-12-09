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
// função de repetição de 3
function repeatTimes3(lista) {
  let repeatNumber = 0;
  for (let i = 0; i < lista.length; i += 1) {
    for (let j = i - 1; j < lista.length; j += 1) {
      if (lista[j] === lista[i]) {
        repeatNumber += 0.20;
      }
    }
  }
  return repeatNumber;
}
// funcao de tamanho menor que zero e numero individual maior que 11
function checando1(lista) {
  let checks = 0;
  for (let j = 0; j < lista.length; j += 1) {
    if (lista[j] > 0) {
      checks += 0.50;
    }
    if (lista[j] > 9) {
      checks += 0.50;
    }
  }
  return checks;
}
// funcao principal
function generatePhoneNumber(lista) {
// seu código aqui
  if (lista.length === 11) {
    let repetion = repeatTimes3(lista);
    let checkizinho = checando1(lista);
    if (repetion >= 3 || checkizinho > 5 || checkizinho < 4.5) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    return `(${lista[0]}${lista[1]}) ${lista[2]}${lista[3]}${lista[4]}${lista[5]}${lista[6]}-`
      + `${lista[7]}${lista[8]}${lista[9]}${lista[10]}`;
  }
  return 'Array com tamanho incorreto.';
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
