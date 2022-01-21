// Intersection types --> & diferente de union --> |
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Michel',
  sobrenome: 'Silva',
};

console.log(pessoa);

// Intersecao

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

// Module mode

export { pessoa };
