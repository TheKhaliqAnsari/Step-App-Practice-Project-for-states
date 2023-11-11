import React, { useState } from "react";

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    "My password is khaliq@123"
  ];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);
  // const step = 1;

  const handleButton = (e) => {
    if(e.target.value === "next" && step <3){
      console.log("inside", step)
      setStep((prev) => prev + 1)
    } if (e.target.value === "prev" && step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsopen(!isOpen)}>&times;</button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step > 0 ? "active" : ""}>1</div>
            <div className={step > 1 ? "active" : ""}>2</div>
            <div className={step > 2 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              value="prev"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={(e) => handleButton(e)}
            >
              Prev
            </button>
            <button
              value="next"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={(e) => handleButton(e)}
            >
              {" "}
              Next{" "}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
