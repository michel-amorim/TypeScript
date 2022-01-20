// Tipagem Enum --> quando quer enumerar algo
enum Cores {
  VERMELHOR = 10, // valor 10
  AZUL = 100, // valor 100
  AMARELo = 200, // 200
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores.VERMELHOR);
console.log(Cores[100]);

console.log(Cores);

//

function escolaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolaCor(Cores.ROXO);
