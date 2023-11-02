const bilGanjil = [];
const bilGenap = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    bilGanjil.push(i);
  } else {
    bilGenap.push(i);
  }
}

const ulGanjil = document.createElement("ul");
ulGanjil.setAttribute("class", "bil-ganjil");

for (const bil of bilGanjil) {
  const li = document.createElement("li");
  li.textContent = bil;
  ulGanjil.appendChild(li);
}

const ulGenap = document.createElement("ul");
ulGenap.setAttribute("class", "bil-genap");

for (const bil of bilGenap) {
  const li = document.createElement("li");
  li.textContent = bil;
  ulGenap.appendChild(li);
}
document.write ("<h1>Nama : Kenny Richie Nergiva</h1><br><h2>Kelas : RPL-X-B</h2><br><h2>Bilangan ganjil</h2>")
document.body.appendChild(ulGanjil);
document.write("<h2>Bilangan genap</h2>")
document.body.appendChild(ulGenap);