const Operation = (a, b, signe) => {
  a = parseFloat(a);
  b = parseFloat(b);
  if (signe === "+") {
    return a + b;
  } else if (signe === "-") {
    return a - b;
  } else if (signe === "*") {
    return a * b;
  } else if (signe === "/") {
    return a / b;
  } else {
    window.alert("Erreur de signe");
    return;
  }
};

export const Calculate = (calcul) => {
  const regex = /([0-9.]+)([+\-*/]{1})([0-9.]+)/;

  if (regex.test(calcul)) {
    let found = regex.exec(calcul);
    console.log(found);
    let numberOne = found[1];
    let numberTwo = found[3];
    let operator = found[2];

    return Operation(numberOne, numberTwo, operator);
  } else {
    window.alert("Calcul Invalide");
  }
};