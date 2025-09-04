let inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const resetButton = document.getElementById("reset-btn");
const result = document.getElementById("output");

resetButton.addEventListener("click", resetInput);

function resetInput() {
  inputNumber.value = "";
  result.innerText = "";
}

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertButton.click();
  }
});
convertButton.addEventListener('click', () => {
    const valueInput = parseInt(inputNumber.value);
    if (!valueInput) {
        output.innerHTML = `<p>Please enter a valid number</p>`;
        return;
    }
    if (valueInput < 1) {
        output.innerHTML = "<p>Please enter a number greater than or equal to 1</p>";
        return;
    }
    if (valueInput >= 4000) {
        output.innerHTML = "<p>Please enter a number less than or equal to 3999</p>";
        return;
    }

  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let roman = "";
  let num = valueInput;

  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      roman += romanMap[i].numeral;
      num -= romanMap[i].value;
    }
  }

  result.innerText = roman;
});
