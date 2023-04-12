import "./style.css";
let cars = [];

const getCars = async () => {
  return await fetch("http://localhost:3333/cars").then((result) =>
    result.json()
  );
};

const showError = (message) => {
  const section = document.querySelector('[data-js="first-form"]');
  const element = document.createElement("h1");
  element.textContent = message;
  section.insertAdjacentElement("beforebegin", element);
};

const updateTable = async () => {
  cars = await getCars();
  const table = document.querySelector('[data-js="cars-table"]');
  if (cars.length === 0) {
    const newLine = document.createElement("tr");

    const newCell = document.createElement("td");

    newCell.textContent = "Nenhum carro encontrado";

    newCell.setAttribute("colspan", table.rows[0].cells.length);

    newLine.appendChild(newCell);

    table.appendChild(newLine);
  } else {
    table.innerHTML = "";
    cars.forEach((car) => {
      const row = table.insertRow(-1);
      const cell1 = row.insertCell(0);
      cell1.innerHTML = car.image;

      const cell2 = row.insertCell(1);
      cell2.innerHTML = car.brandModel;

      const cell3 = row.insertCell(2);
      cell3.innerHTML = car.year;

      const cell4 = row.insertCell(3);
      cell4.innerHTML = car.plate;

      const cell5 = row.insertCell(4);
      cell5.innerHTML = car.color;
    });
  }
};

const form = document.querySelector('[data-js="cars-forms"');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3333/cars", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image: e.target.image.value,
      brandModel: e.target.marcaModelo.value,
      year: e.target.ano.value,
      plate: e.target.placa.value,
      color: e.target.cor.value,
    }),
  }).then((result) =>
    result.json().then((data) => {
      console.log(data);
      if (data.error === true) {
        showError(data.message);
      } else {
        updateTable();
      }
    })
  );

  // document.querySelector('[name="image"]').focus();
  // document.querySelector('[name="image"]').value = "";
  // document.querySelector('[name="marcaModelo"]').value = "";
  // document.querySelector('[name="ano"]').value = "";
  // document.querySelector('[name="placa"]').value = "";
  // document.querySelector('[name="cor"]').value = "";
});

await updateTable();
