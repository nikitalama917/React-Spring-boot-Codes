import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";

// const testData = ["Nikita", "Swarn", "Ravi", "arita"];
// const colors = ["Red", "White", "Pink"];
// const cars = ["BMW", "Tesla", "Audi"];

// const Random = () => {
//   const [myNumber, setNumber] = useState(1);
//   return (
//     <div>
//       <button onClick={ function() {
//         setNumber(Math.random() * 10)}
//       }>Numeric</button>Number is {myNumber}
//     </div>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
