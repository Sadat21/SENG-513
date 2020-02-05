// TODO: Add old value for reuse
onNormalButtonClick = character => {
  let inputElement = document.getElementById("interim-input");
  inputElement.value = inputElement.value + character;
};

clearInterim = () => {
  let inputElement = document.getElementById("interim-input");
  inputElement.value = "";
};

deleteLast = () => {
  let inputElement = document.getElementById("interim-input");
  if (inputElement.value !== "") {
    inputElement.value = inputElement.value.substring(
      0,
      inputElement.value.length - 1
    );
  }
};

equal = () => {
  let inputElement = document.getElementById("interim-input");
  let outputElement = document.getElementById("output");

  if (inputElement.value !== "") {
    const expression = inputElement.value;
    // TODO: Add * between every x(y) and (x)(y)
    let cleanExpression = expression.replace(/([\d\)])\(/, "$1*(");

    let answer = "";
    try {
      // TODO: Scientific value
      answer = eval(cleanExpression);
    } catch {
      answer = "Error";
    } finally {
      outputElement.value = expression + "=" + answer;
      clearInterim();
    }
  }
};
