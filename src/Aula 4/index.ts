// Tipagem de Objetos

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Nova Chave';

console.log(objetoA);
