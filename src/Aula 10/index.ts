// TIpagem unknown, tem quase a mesma funcionalidade do any, porêm se usa mais por ele força que você cheque que tipo está seu objeto

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);
