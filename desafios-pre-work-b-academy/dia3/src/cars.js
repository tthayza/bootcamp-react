const form = document.querySelector('[data-js="cars-forms"');
const table = document.querySelector('[data-js="cars-table"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const car = {
    image: e.target.image.value,
    marcaModelo: e.target.marcaModelo.value,
    ano: e.target.ano.value,
    placa: e.target.placa.value,
    cor: e.target.cor.value,
  };
  const row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  cell1.innerHTML = car.image;

  const cell2 = row.insertCell(1);
  cell2.innerHTML = car.marcaModelo;

  const cell3 = row.insertCell(2);
  cell3.innerHTML = car.ano;

  const cell4 = row.insertCell(3);
  cell4.innerHTML = car.placa;

  const cell5 = row.insertCell(4);
  cell5.innerHTML = car.cor;

  document.querySelector('[name="image"]').focus();
  document.querySelector('[name="image"]').value = "";
  document.querySelector('[name="marcaModelo"]').value = "";
  document.querySelector('[name="ano"]').value = "";
  document.querySelector('[name="placa"]').value = "";
  document.querySelector('[name="cor"]').value = "";
});
