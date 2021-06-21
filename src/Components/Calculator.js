import React, { useState } from "react";
import { Calculate } from "../utils/calcul";



const Calculator = ({ theme, toggleTheme, isLight }) => {
  const [formState, setFormState] = useState({
    calcul: "",
    result: 399.981
  });

  const touches = [
    7, 8, 9, "del",
    4, 5, 6, "+",
    1, 2, 3, "-",
    ".", 0, "/", "x",
    "reset", "="
  ];

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    if (name === "calcul") {
      const regex = /[^0-9.+\-*/]/g;
      value = value.replace(regex, "");
    }
    let oldState = { ...formState };
    oldState[name] = value;
    setFormState(oldState);
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    let result;

    if (formState.calcul === "0" || formState.calcul === "") {
      window.alert("Pas de calcul en cours");
    } else {
      result = Calculate(formState.calcul);
      let oldState = { ...formState };
      oldState["result"] = result;
      setFormState(oldState);
    }
  };

  const handleTouch = (value) => {
    let oldState = { ...formState };
    if (
      (value >= 0 && value <= 9) ||
      value === "/" ||
      value === "x" ||
      value === "-" ||
      value === "+" ||
      value === "."
    ) {
      oldState["calcul"] += value;
      setFormState(oldState);
    } else if (value === "=") {
      handleSubmit();
    } else if (value === "reset") {
      oldState["calcul"] = "";
      oldState["result"] = 0;
      setFormState(oldState);
    } else if (value === "del" && oldState["calcul"] !== "") {
      console.log(oldState["calcul"]);
      oldState["calcul"] = oldState["calcul"].substring(
        0,
        oldState["calcul"].length - 1
      );
      setFormState(oldState);
    }
  };


  return (
    <section id="calculator">
      <div className="content-wrapper">
        <div className="in-section">
          <h2>Calculator</h2>
          {/* Results */}
          <div className="result">
            <label for="calcul">Calcul</label>
            <input
              type="text" autoFocus
              name="calcul" id="calcul"
              // value={formState.calcul === "" ? formState.result : formState.calcul}
              value={formState.result !== 0 ? formState.result : formState.calcul}
              onChange={handleChange}
            />
          </div>
          {/* Touch */}
          <div className="touch">
            {touches.map((tch, k) => {
              return (
                <div

                  key={k}
                  className={`tch tch-${tch}`}
                  onClick={() => handleTouch(tch)}
                >
                  {tch}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Calculator