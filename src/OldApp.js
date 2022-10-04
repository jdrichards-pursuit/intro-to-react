// import packages
// import Components
// import css
// import helper functions

import Main from "./Main";

import "./App.css";

const num1 = 3;
const num2 = 7;

function sum(x, y) {
  return x + y;
}

const name = {
  fName: "JD",
  lName: "Richards",
};

//curly brackets signify javascript inside JSX

// you cannot render a full object inside JSX. React tries to render a string and cannot convert an object to a string.

function App() {
  return (
    <div className="App">
      <h1
        className="appHeader"
        style={{ color: "blue", backgroundColor: "yellow" }}
      >
        Pursuit App Template
      </h1>
      {name.fName} {name.lName}
      <p style={{ border: "1px solid black", height: "100px" }}>
        {num1 + num2}
      </p>
      <p>Number: {sum(num1, num2)}</p>
      <Main />
    </div>
  );
}

export default App;
