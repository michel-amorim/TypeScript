// Tipagem Tuple

const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Michel'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Tipagem ReadonlyArry

const arry1: readonly string[] = ['Luiz', 'Michel'];
const arry2: ReadonlyArray<string> = ['luiz', 'Michel'];
