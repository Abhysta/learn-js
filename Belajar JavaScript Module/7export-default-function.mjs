//fitur yang digunakan untuk membuat default data di module, dan membantu JS agar kompatibel
//dengan CommonJS dan AMD module system
//export default hanya bisa di isi satu saja
//namun bisa menggunakan export named jika lebih dari satu atau export biasa
//penulisan export default gunakan export default di awal variabel, function, dan class
//saat memanggilnya gunakan alias dikarenakan export default tidak mewajibkan pemberian nama pada variabel, function, dan class
//import alias from ""
//import {default as alias} from ""

export default function (name) {
  console.log(`Hello ${name}`);
}

const middleName = "Abhysta";
export { middleName };

//apabila ada export default dan export biasa
//untuk memanggil export nya secara bersamaan dapat menggunakan import
//import alias, {name1, name2} from ""
//import {default as alias, name1, name2} from ""

//rekomendasi bedakan antara default dan named jgn jadikan satu file
