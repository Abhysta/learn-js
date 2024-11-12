//daripada menggunakan export untuk setiap awal function class dan variabel
//gunakan export sekaligus semuanya yang ingin di export
//dengan cara export {nama, nama, nama}

const nama = "Abhysta";

function sum(first, second) {
  return first + second;
}

class Person {}

export { nama, sum, Person };
