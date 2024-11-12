//merupakan mekanisme untuk memanggil kembali kode yang ada di program dari proses async
//biasanya berbentuk function sebagai parameter
//contoh async method
//setTimeout(callback, timeinmilis)
//setInterval(callback, timeinmilis)

const addElement = () => {
  const header = document.createElement("h1");
  header.textContent = "Belajar Async";

  document.body.appendChild(header);
};

setTimeout(addElement, 5000);

const setTime = () => {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
};

setInterval(setTime, 1000);
