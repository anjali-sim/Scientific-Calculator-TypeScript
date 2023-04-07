//array to perform the memory operations
let memoryStack: number[] = [];

// variable used to toggle between degree and radian buttons
let degree: number = 0;

// for changing the dropdowns
let dropdownChange: number = 0;

//to take the input
const inputField = document.getElementById("input") as HTMLInputElement;

/**
 * @function displayInputValue
 * @description to take the input from the input field entered by the user and display it on the display bar
 * @param value
 * value : string
 * @returns void
 */
function displayInputValue(value: string): void {
  inputField.value += value;
}

/**
 * @function fixedToExponent
 * @description to display the answer in scientific notation
 * @param none
 * @returns void
 */
function fixedToExponent(): void {
  const input = document.getElementById("input") as HTMLInputElement;
  input.value = Number(input.value).toExponential().toString();
}

/**
 * @function degreeToRadian
 * @description  to toggle the button between degree(DEG) and radian(RAD)
 * @params  none
 * @returns void
 */
function degreeToRadian(): void {
    // if the degree variable is set to 0, then display the RAD(radian) button else DEG(degree) button
    if (degree === 0) {
      degree = 1;
      const degreeElement = document.querySelector("#degree") as HTMLDivElement;
      degreeElement.innerHTML = "RAD";
    } else {
      degree = 0;
      const degreeElement = document.querySelector("#degree") as HTMLDivElement;
      degreeElement.innerHTML = "DEG";
    }
  }
  
  /**
   * @description  validating to restrict the alphabets and special characters in the input field using event listener based on the ASCII code
   * Examples: if the user enters alphabets or special characters from keyboard, then restrict it from entering into the input field
   * - asfhjk to 0
   * - #&;} to 0
   * - 5869*2 to 5869*2
   */
  inputField.addEventListener("keypress", function (event: KeyboardEvent) {
    const allowedKeyCodes: string[] = [
      "33",
      "34",
      "35",
      "36",
      "38",
      "39",
      "58",
      "59",
      "60",
      "61",
      "62",
      "63",
      "64",
      "91",
      "92",
      "93",
      "95",
      "96",
      "123",
      "124",
      "125",
      "126",
    ];
    let i: number;
    for (i = 65; i <= 90; i++) {
      allowedKeyCodes.push(i.toString());
    }
  
    for (i = 97; i <= 122; i++) {
      allowedKeyCodes.push(i.toString());
    }
  
    const keyCode = event.keyCode.toString();
    if (allowedKeyCodes.indexOf(keyCode) > -1) {
      event.preventDefault();
    }
  });