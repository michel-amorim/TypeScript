// Tipagem never
function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
