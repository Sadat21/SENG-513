let history = "Error";

onArithmeticClick = character => {
  let inputElement = document.getElementById("interim-input");
  if (inputElement.value === '' && history !== "Error") {
    inputElement.value = history + character;
  }
  else {
    inputElement.value = inputElement.value + character;
  }
}

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
    // Add * between every x(y) and (x)(y)
    let cleanExpression = expression.replace(/([\d\)])\(/, "$1*(");

    let answer = "";
    try {
      // TODO: Scientific value
      answer = eval(cleanExpression);
    } catch {
      answer = "Error";
    } finally {
      outputElement.value = expression + "=" + answer;
      history = answer
      clearInterim();
    }
  }
};
