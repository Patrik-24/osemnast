function calculate() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let znamienka = document.getElementById("znamienka").value;
  let result;

  switch (znamienka) {
    case 'add':
      result = number1 + number2;
      break;
    case 'subtract':
      result = number1 - number2;
      break;
    case 'multiply':
      result = number1 * number2;
      break;
    case 'divide':
      result = number1 / number2;
      break;
    case 'custom':
      break;
    default:
      result = "Neplatná operácia";
  }

  document.getElementById("result").value = result;

  /* LOCALSTORAGE */
  let pamat = localStorage.getItem("pamat");
  if (pamat) {
    pamat = JSON.parse(pamat);
  } else {
    pamat = []
  }

  pamat.push(result);
  /* max 5 vysledok, vzdy posledny nahrad */
  if (pamat.length > 5) {
    pamat.shift();
  }

  localStorage.setItem("pamat", JSON.stringify(pamat));

  /* Pripnutie na stranku  */
  let pamatList = document.getElementById("pamat");
  pamatList.innerHTML = '';

  for (let i = 0; i < pamat.length; i++) {
    let listItem = document.createElement("p");

    if (i === 0) {
      listItem.textContent = "Prvý výsledok: " + pamat[i];
    } else if (i === 1) {
      listItem.textContent = "Druhý výsledok: " + pamat[i];
    } else if (i === 2) {
      listItem.textContent = "Treti výsledok: " + pamat[i];
    } else if (i === 3) {
      listItem.textContent = "Štvrtý výsledok: " + pamat[i];
    } else if (i === 4) {
      listItem.textContent = "Piaty výsledok: " + pamat[i];
    } 
    pamatList.appendChild(listItem);
  }
}