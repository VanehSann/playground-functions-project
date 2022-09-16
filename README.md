
<p align="center"><b>
 <a href="#----">English version README 🇺🇸 </a> •
 <a href="#---project-lessons-learned-------">README em Português 🇧🇷</a>
  </b>
</p>
<h1 align="center">
  📝 Playground Functions Project
  <span> ( 🇧🇷 )  </span>
</h1>

<br>
<br>

<section>
  <table align="center">
<tr><p align="center"><b> </td> 
<td> <a href="#---sobre--">Sobre</a></td> 
<td>  <a href="#tecnologias-utilizadas--hard-skills-">Tecnologias utilizadas</a></td> 
<td>  <a href="">Requisitos do projeto</a></td> 
  </b>
  </p></tr>
  </table>
  
  <br>
  
  <blockquote>
    <h2 align="left">
   Sobre
  </h2>
<table>
    <tr>
      <td><br>
        <p align="left">
         Nesse projeto, que foi nosso segundo projeto na Trybe, tivemos que desenvolver funções para atender o comportamento esperado em cada requisito. Foi uma ótima oportunidade de escrever códigos usando JavaScript, como utilizar for e for/in, if/else, manipular arrays e objetos, repartir nosso código em funções menores, refatoração de códigos, usar operadores lógicos/aritméticos e claro se atentar as normas do lint também.</p>
      </td>
    </tr>
    <tr>
      <td><br>
        <p align="left">
          <b>Autores:</b> Esse projeto foi desenvolvido por <a href="https://www.linkedin.com/in/vanehsann/" target="_blank"> Vanessa Santos <b>( Vaneh Sann' )</b></a> como estudante de desenvolvimento web na <b><a href="https://www.betrybe.com/" target="_blank"> Trybe </a></b>
        </p>
      </td>
    <tr>
    <tr>
      <td><br>
        <p align="left">
          <b>Módulo:</b> Fundamentos de desenvolvimento web
        </p>
      </td>
    </tr>
 
</table> 
  </blockquote>

<br>
<br>

<blockquote>
   <h2>Trabalhando atualmente</h2>
  <p> Apesar do status do projeto está como concluido, há alguns pontos que pretendo melhorar na aplicação, que são: </p>
   <table>
  <tr>
    <td>
      <b>Metas</b>
    </td>
    <td>
      <b>Urgência</b>
    </td>
  </tr>
  <tr>
    <td>Testes Unitários ou de integração ( Jest, Cypress... )</td>
    <td>🟢</td>
  </tr>
  <tr>
    <td>Add README and site English Version</td>
    <td>🟢</td>
  </tr>

</table></blockquote>

<br>
<br>


<div>

  <blockquote>
    <h2 align="left">
Tecnologias utilizadas ( Hard Skills )
</h2>
    <table>
      
 <tr><td>
 - Unit & Bash
 </tr></td> 
 <tr><td> 
     - Git & GitHub
 </tr></td> 
 <tr><td> 
 - JavaScript
 </tr></td> 
    </table>
      </blockquote>
  </div>
  
  
<br>
<br>


<blockquote> <h2 align="left">Requisitos</h2>

 1 - O requisito 1 era para implementarmos a função compareTrue com o operador lógico &&, caso todos os valores do parâmentro forem verdadeiros ele retorna `true` e se um for dos valores for `false` ele retorna `false`.

 2 - O requisito 2 era para implementarmos a função `calcArea`, com dois parâmentos `base` e `height` ( base e altura ), e deve retornar o valor da áera seguindo a forma matemática `(base * altura) / 2`.

 3 - O requisito 3 era para implementarmos a função `splitSentence`, que receberá uma frase em formato `string` e deve retornar um array com as palavras separadas, ex.: Recebe `"love story"` e retorna `["love", "story"]`.

 4 - O requisito 4 era para implementarmos a função `concatName`, que irá receber um array de strings e juntar as informações no formato: ["vanessa", "cristina", "santos"], seguindo esse exemplo do array o retorno seria "santos, vanessa".

 5 - O requisito 5 era para implementarmos a função `footballPoints`, que calculará o número pontos do time, como paramento vai receber números de vitórias e empates. A casa vitória recebe 3 pontos e a cada empate recebe 1 ponto. 

 6 - O requisito 6 era para implementarmos a função `highestCount`, aonde irá receber um array com vários números, a função precisa descobrir qual é o maior número e retornar quantas vezes ele aparece.

 7 - O requisito 7 era para implementarmos a função `catAndMouse`, uma especie de caça ao rato aonde iremos receber como parâmetro a distância de dois gatos tem do rato, retorna o gato que tiver a menor distância do rato.

 8 - O requisito 8 era para implementarmos a função `fizzBuzz`, aonde irá retornar 4 palavras diferentes para cada condição diferente. Se for divisivel por 3, por 5, por 3 e 5 e quando não é divisivel nem por 3 e nem por 5.

 9 - O requisito 9 era para implementarmos duas funções, a primeira se chamará `encode` que recebe como parâmetro uma `string`, e deve retornar uma versão codificada com as seguintes normas:

`
a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5
`

ex.: Recebe `"hello"`, o retorno deverá ser `"h2ll4"`.

Já a segunda função se chamará `decode`, e irá usar as mesmas normas para decodificar, caso receba um `"h2ll4"`, ele retorna um  `"hello"`.

 10 - O requisito 10 era para implementarmos a função que receberá como parâmetro, um array com uma lista de tecnologias e no segundo parâmetro um nome. E a função deve retornar de forma crescente, um objeto com a técnologia e o nome. 

// Recebe:
```
["JavaScript", "CSS", "HTML"]
"Vanessa Santos"
```

// Retorna:
```
[
  {
    tech: "CSS",
    name: "Vanessa Santos"
  },
  {
    tech: "HTML",
    name: "Vanessa Santos"
  },
  {
    tech: "JavaScript",
    name: "Vanessa Santos"
  }
]
```

E se o array estiver vazio, deve ser retornado'Vazio!'

 11 - O requisito 11 era para implementarmos a função `generatePhoneNumber`, que vai receber um array com 11 números e vai retornar um número de telefone, respeitando o formato (00) 00000-0000.

 12 - O requisito 12 era para implementarmos a função `triangleCheck`, que irá receber 3 parâmetros, com 3 valores, e a função vai retornar `true` se for possivel ciar um triângulo e `false` se não for. Considerando que para formar um triangulo.

 13 - O requisito 13 era para implementarmos a função `hydrate`, deve retornar uma string informando quantas copos de água a pessoa precisa beber a cada um copo de bebida.</blockquote>
  </section>

 <h1 align="center">  🇺🇸  </h1>

<p align="center"> Soon </p>
