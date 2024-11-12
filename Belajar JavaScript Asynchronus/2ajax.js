//AJAX = Asynchronous JavaScript and XML
//ajax digunakan untuk mengambil dan mengirim data ke URL lain
//untuk membuatnya gunakan class XMLHttpRequest

const ajax = new XMLHttpRequest();
// ajax.open("GET", "api/hello.json");
//atau cara dibawah
ajax.open("GET", "http://127.0.0.1:5500/api/hello.json");
ajax.send();
