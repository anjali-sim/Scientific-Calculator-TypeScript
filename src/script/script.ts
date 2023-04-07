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

  interface TrigonometryCalculator {
    input: HTMLInputElement;
    sine(): void;
    cosine(): void;
    tangent(): void;
    cotangent(): void;
    secant(): void;
    cosecant(): void;
  }
  class TrigonometryCalculatorImplement implements TrigonometryCalculator {
    public input: HTMLInputElement;
  
    constructor(input: HTMLInputElement) {
      this.input = input;
    }
  
    /**
     * @function  sine
     * @description   evaluates the sine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sin(90 radian) to 0.8939966636005579
     * - sin(90 degree) to 1
     */
    public sine(): void {
      if (degree === 0) {
        this.input.value = Math.sin(
          (Math.PI / 180) * parseFloat(this.input.value)
        ).toString();
      } else {
        this.input.value = Math.sin(parseFloat(this.input.value)).toString();
      }
    }
  
    /**
     * @function  cosine
     * @description  evaluates the cosine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cos(45 radian) to 0.5253219888177297
     * - cos(45 degree) to 0.7071067811865476
     */
    public cosine(): void {
      if (degree === 0) {
        this.input.value = Math.cos(
          (Math.PI / 180) * parseFloat(this.input.value)
        ).toString();
      } else {
        this.input.value = Math.cos(parseFloat(this.input.value)).toString();
      }
    }
  
    /**
     * @function  tangent
     * @description  evaluates the tangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - tan(60 radian) to 0.320040389379563
     * - tan(60 degree) to 1.7320508075688767
     */
    public tangent(): void {
      if (degree === 0) {
        this.input.value = Math.tan(
          (Math.PI / 180) * parseFloat(this.input.value)
        ).toString();
      } else {
        this.input.value = Math.tan(parseFloat(this.input.value)).toString();
      }
    }
  
    /**
     * @function  cotangent
     * @description  evaluates the cotangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cot(30 radian) to -0.15611995216165922
     * - cot(30 degree) to 1.7320508075688774
     */
    public cotangent(): void {
      if (degree === 0) {
        this.input.value = (
          1 / Math.tan((Math.PI / 180) * parseFloat(this.input.value))
        ).toString();
      } else {
        this.input.value = (
          1 / Math.tan(parseFloat(this.input.value))
        ).toString();
      }
    }
  
    /**
     * @function  secant
     * @description  evaluates the secant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sec(45 radian) to 1.9035944074044246
     * - sec(45 degree) to 1.414213562373095
     */
    public secant(): void {
      if (degree === 0) {
        this.input.value = (
          1 / Math.cos((Math.PI / 180) * parseFloat(this.input.value))
        ).toString();
      } else {
        this.input.value = (
          1 / Math.cos(parseFloat(this.input.value))
        ).toString();
      }
    }
  
    /**
     * @function  cosecant
     * @description  evaluates the cosecant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cosec(60 radian) to -3.280725574403968
     * - cosec(60 degree) to 1.1547005383792517
     */
    public cosecant(): void {
      if (degree === 0) {
        this.input.value = (
          1 / Math.sin((Math.PI / 180) * parseFloat(this.input.value))
        ).toString();
      } else {
        this.input.value = (
          1 / Math.sin(parseFloat(this.input.value))
        ).toString();
      }
    }
  }
  const trigonometry = new TrigonometryCalculatorImplement(inputField);
  
  const sineFunction = () => {
    trigonometry.sine();
  };
  const cosineFunction = () => {
    trigonometry.cosine();
  };
  const tangentFunction = () => {
    trigonometry.tangent();
  };
  const cotangentFunction = () => {
    trigonometry.cotangent();
  };
  const secantFunction = () => {
    trigonometry.secant();
  };
  const cosecantFunction = () => {
    trigonometry.cosecant();
  };
  
  interface FunctionCalculator {
    input: HTMLInputElement;
    floor(): void;
    ceil(): void;
    random(): void;
    modulus(): void;
  }
  
  class FunctionCalculatorImplement implements FunctionCalculator {
    public input: HTMLInputElement;
  
    constructor(input: HTMLInputElement) {
      this.input = input;
    }
  
    /**
     * @function  floor
     * @description  to round down and evaluates the largest integer less than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.85 = 5
     */
    public floor(): void {
      this.input.value = Math.floor(parseFloat(this.input.value)).toString();
    }
  
    /**
     * @function  ceil
     * @description  to round up and evaluates the smaller integer greater than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.23 = 6
     */
    public ceil(): void {
      this.input.value = Math.ceil(parseFloat(this.input.value)).toString();
    }
  
    /**
     * @function  random
     * @description  gives a random number from 0 up to but not including 1
     * @params  none
     * @returns void
     * Examples:
     * - 0.8535283651436478
     * - 0.6407613844878561
     * - 0.1827885058635727
     */
    public random(): void {
      this.input.value = Math.random().toString();
    }
  
    /**
     * @function  modulus
     * @description  evaluates the absolute value of a number
     * @params  none
     * @returns void
     * Examples:
     * - -6.235 = 6.235
     */
    public modulus(): void {
      this.input.value = Math.abs(parseFloat(this.input.value)).toString();
    }
  }
  
  const functions = new FunctionCalculatorImplement(inputField);
  
  const floorFunction = () => {
    functions.floor();
  };
  const ceilFunction = () => {
    functions.ceil();
  };
  const randomFunction = () => {
    functions.random();
  };
  const modulusFunction = () => {
    functions.modulus();
  };

  /**
 * @function  calculate
 * @description  to evaluate the basic expressions
 * @params  none
 */
function calculate() {
    const input = document.getElementById("input") as HTMLInputElement;
    input.value = input.value.replaceAll("^", "**");
    input.value = input.value;
    const result = input.value;
    // Error handling
    /**
     * this try catch handles the error when user enters invalid input
     * Examples:
     * 9-6+5 = 8
     * 5-6/5* = Invalid Input!
     */
    function cal(user: string) {
      return new Function("return " + user)();
    }
    try {
      const output = cal(`${result}`);
      const inputEl = document.getElementById("input") as HTMLInputElement;
      inputEl.value = output.toString();
    } catch (err) {
      const errDiv = document.getElementById("errorDiv") as HTMLDivElement;
      errDiv.textContent = "Invalid Input!";
      setTimeout(() => {
        errDiv.textContent = "";
        const inputEl = document.getElementById("input") as HTMLInputElement;
        inputEl.value = "";
      }, 2000);
    }
  }

  /**
 * @function  changeDropdown
 * @description  to toggle the buttons
 * @params  none
 * @returns void
 */
function changeDropdown(display1: string, display2: string): void {
    if (typeof document !== "undefined") {
      const elements2: HTMLElement[] = Array.from(
        document.getElementsByClassName("display2")
      ) as HTMLElement[];
      const elements1: HTMLElement[] = Array.from(
        document.getElementsByClassName("display1")
      ) as HTMLElement[];
  
      if (dropdownChange === 1) {
        elements2.forEach((x: HTMLElement) => {
          x.style.display = "inline-block";
        });
  
        elements1.forEach((x: HTMLElement) => {
          x.style.display = "none";
        });
  
        dropdownChange = 0;
      } else {
        elements1.forEach((x: HTMLElement) => {
          x.style.display = "inline-block";
        });
  
        elements2.forEach((x: HTMLElement) => {
          x.style.display = "none";
        });
  
        dropdownChange = 1;
      }
    } else {
      console.log("Error: `document` is not defined");
    }
  }

  interface SecondCalculator {
    square(): void;
    squareRoot(): void;
    xRaiseY(): void;
    raiseTo10(): void;
    logarithm(): void;
    naturalLogarithm(): void;
  }
  
  class SecondCalculatorImplement implements SecondCalculator {
    input: HTMLInputElement;
    errorDiv: HTMLElement;
  
    constructor(input: string, errorDiv: string) {
      this.input = document.getElementById(input) as HTMLInputElement;
      this.errorDiv = document.getElementById(errorDiv) as HTMLElement;
    }
  
    /**
     * @function  square
     * @description  performs square of a number
     * @params  none
     * @returns void
     * Examples:
     * - 5^2 to 25
     * - -6^2 to 36
     */
    public square(): void {
      this.input.value = Math.pow(Number(this.input.value), 2).toString();
    }
  
    /**
     * @function  squareRoot
     * @description  performs the square root of a number
     * @params  none
     * @returns void
     * Examples:
     * - sqaureRoot(25) to 5
     * - squareRoot(-4) to Error!
     */
    public squareRoot(): void {
      const inputNumber = Number(this.input.value);
      if (inputNumber < 0) {
        this.displayError();
      } else {
        this.input.value = Math.sqrt(inputNumber).toString();
      }
    }
  
    /**
     * @function  xRaiseY
     * @description  evaluates a number raised to another number
     * @params  none
     * @returns void
     * Examples:
     * - 6^3 to 216
     */
    public xRaiseY(): void {
      this.input.value += "^";
    }
  
    /**
     * @function  raiseTo10
     * @description  gives 10 to the power of a number
     * @params  none
     * @returns void
     * Examples:
     * - 10^3 to 1000
     */
    public raiseTo10(): void {
      this.input.value = Math.pow(10, Number(this.input.value)).toString();
    }
  
    /**
     * @function  logarithm
     * @description  performs logarithm(log base 10) of a number
     * @params  none
     * @returns void
     * Examples:
     * - log(2) to 0.3010299956639812
     */
    public logarithm(): void {
      const inputNumber = Number(this.input.value);
      if (inputNumber < 0) {
        this.displayError();
      } else {
        this.input.value = Math.log10(inputNumber).toString();
      }
    }
  
    /**
     * @function  naturalLogarithm
     * @description  performs natural logarithm(ln base e) of a number
     * @params  none
     * @returns void
     * Examples:
     * - ln(2) to 0.6931471805599453
     */
    public naturalLogarithm(): void {
      const inputNumber = Number(this.input.value);
      if (inputNumber < 0) {
        this.displayError();
      } else {
        this.input.value = Math.log(inputNumber).toString();
      }
    }
  
    /**
     * @function  displayError
     * @description  to display the error and hide it after 2 seconds
     * @params  none
     * @returns void
     */
    private displayError(): void {
      this.errorDiv.textContent = "Error!";
      setTimeout(() => {
        this.errorDiv.textContent = "";
        this.input.value = "";
      }, 2000);
    }
  }
  const advancefunctionality = new SecondCalculatorImplement("input", "errorDiv");
  
  const squareFunction = () => {
    advancefunctionality.square();
  };
  const squareRootFunction = () => {
    advancefunctionality.squareRoot();
  };
  const xRaiseYFunction = () => {
    advancefunctionality.xRaiseY();
  };
  const raiseTo10Function = () => {
    advancefunctionality.raiseTo10();
  };
  const logarithmFunction = () => {
    advancefunctionality.logarithm();
  };
  const naturalLogarithmFunction = () => {
    advancefunctionality.naturalLogarithm();
  };