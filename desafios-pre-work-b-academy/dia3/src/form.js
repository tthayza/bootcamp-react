const inputName = document.querySelector('[data-js="inputName"]');

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
