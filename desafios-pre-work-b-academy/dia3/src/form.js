const inputName = document.querySelector('[data-js="inputName"]');
const area = document.querySelector('[data-js="area"]');
const colorsSelect = document.querySelector('[data-js="colors-select"');
inputName.addEventListener("input", (e) => {
  e.target.value = returnFirstUpper(inputName.value);
});

const returnFirstUpper = (name) => {
  const formatedName = name.toLowerCase().split(" ");
  const notChange = ["das", "dos", "de", "da", "do"];

  for (let i = 0; i < formatedName.length; i++) {
    let currentEl = formatedName[i];
    if (!notChange.includes(currentEl)) {
      formatedName[i] = currentEl[0].toUpperCase() + currentEl.slice(1);
    }
  }
  return formatedName.join(" ");
};

colorsSelect.addEventListener("change", (e) => {
  area.innerHTML = "";
  [...e.target.selectedOptions].map((el) => {
    const div0 = document.createElement("div");
    div0.style.backgroundColor = el.value.toLowerCase();
    area.appendChild(div0);
  });
});
