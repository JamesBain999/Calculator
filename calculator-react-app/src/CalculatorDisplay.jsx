import React, { useState } from "react";

function CalculatorDisplay() {
  const [displayValue, setDisplayValue] = useState("0");

  // Function for displaying numbers and operators on the screen
  function displayOnScreen(clickedButton) {
    const value = clickedButton.textContent;
    if (displayValue === "0") {
      setDisplayValue("");
      setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
    } else {
        setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
    }
  }

  // Function for clearing the screen
  function clearScreen() {
    setDisplayValue("0");
  }

  // Function for using the equals sign
  function equalsDisplayScreen() {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  }

  return (
    <div class="calcBorder fullscreen-container">
      <div id="frame">
        <div id="displayScreen">{displayValue}</div>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number7"
        >
          7
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number8"
        >
          8
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number9"
        >
          9
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="operator"
          id="plusSign"
        >
          +
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number4"
        >
          4
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number5"
        >
          5
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number6"
        >
          6
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="operator"
          id="minusSign"
        >
          -
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number1"
        >
          1
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number2"
        >
          2
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number3"
        >
          3
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="operator"
          id="multiplySign"
        >
          *
        </button>
        <button
          onClick={() => clearScreen()}
          className="number"
          id="clearSign"
        >
          clear
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="number"
          id="number0"
        >
          0
        </button>
        <button
          onClick={() => equalsDisplayScreen()}
          className="number"
          id="equalSign"
        >
          =
        </button>
        <button
          onClick={(e) => displayOnScreen(e.target)}
          className="operator"
          id="divisionSign"
        >
          /
        </button>
      </div>
    </div>
  );
}

export default CalculatorDisplay;
