//agregate module digunakan untuk meng export module dari module lain menjadi satu sehingga
//saat pemanggilan hanya perlu mengimport agregrate module nya saja
export { Person } from "./4class.mjs";
export { name } from "./2variable.mjs";
export { nama, sum } from "./5export-multiple.mjs";
