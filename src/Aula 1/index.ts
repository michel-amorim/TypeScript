/* eslint-disable */

// Tipos básicos (aqui ocorro inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings
let idade: number = 30; // 10, 1.57,
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Tipagem de Arrys

// Dois tipos de tipagens para Arrys number and strings

let arrayOfNumber: Array<number> = [1, 2, 3];
let arrayOfNumber2: number[] = [1, 2, 3];

let arrayOfStrings: Array<string> = ['a', 'b', 'c'];
let arrayOfStrings2: string[] = ['a', 'b', 'c'];

// Tipagem de Objetos

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Michel',
  idade: 24,
  adulto: true,
};

// Tipagem de Funções

function soma(x: number, y: number) {
  return x + y;
}
const result = soma(2, 2);

console.log(result);

//

const soma2: (x: number, y: number) => number = (x, y) => x + y;
