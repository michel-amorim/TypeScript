// Vpod = É quando uma função não retorna nada, no JS undefinded

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Michel',
  sobrenome: 'Silva',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Michel', 'Silva');
pessoa.exibirNome();

export { pessoa }; // pessoa já está sendo declarado no escopo global, por isso temos que exportar
