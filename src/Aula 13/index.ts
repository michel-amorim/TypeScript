// Type alias -> tipos de protocolos criado manualmente

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string | number;
};

type ColorRGB = 'Vermelho' | 'Verde' | 'Azul';
type ColorCMYK = 'Cieano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = ColorRGB | ColorCMYK; // Union alias

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000,
};

export function setFavoriteColor(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setFavoriteColor(pessoa, 'Amarelo'));
console.log(pessoa);
