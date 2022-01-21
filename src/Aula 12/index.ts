import { escolaCor } from '../Aula 9';

// Tipos Literais
let x = 10; // Esse valor number pode ser redeclarado assim como no JS puro
x = 0b1010;

//

const y = 10; // Esse y = 100, não poderá mais ser redeclarado, por ser uma const

//

let a = 100 as const; // transformando a variavel A em const

//

const pessoa = {
  pessoa: 'Michel' as const, // tipo "Luiz" quando declarado como const
  sobrenome: 'Silva', // tipo string
};

//

function escolhaCor(cor: 'vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolaCor);

//

export default 1;
// Module mode - saindo do escopo global
