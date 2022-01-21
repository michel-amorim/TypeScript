// Type assertion

/* Recomendados */

// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qulauqer coisa';
input.focus();

/* Não Recomendados */

// Type assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null Assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
