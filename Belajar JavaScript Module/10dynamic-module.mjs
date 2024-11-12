//saat kita import maka otomatis module akan diload dan itu akan memberatkan dan banyak data yang harus
//digunakan, oleh karena itu dynamic module digunakan, dimana module hanya akan di load saat kondisi terpenuhi
// atau menggunakan promise (lanjut materi async)

export function alertHello(name) {
  alert(`Hello ${name}`);
}
