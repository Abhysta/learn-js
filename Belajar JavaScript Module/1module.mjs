//file module dapat berbentuk js atau mjs
//lebih baik mjs untuk membedakan
//agar module dapat diakses dari luar gunakan export
//tambahkan diawal variable, function, atau class

export function sayHello(name) {
  console.log(`Hello ${name}`);
}

export function sayBye(name) {
  console.log(`Good Bye ${name}`);
}
