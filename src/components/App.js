import React, { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const flamesResult = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

  const calculateFLAMES = () => {
    if (name1.trim() === "" || name2.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    let str1 = name1.split("");
    let str2 = name2.split("");

    for (let i = 0; i < str1.length; i++) {
      let matchIndex = str2.indexOf(str1[i]);
      if (matchIndex !== -1) {
        str1.splice(i, 1);
        str2.splice(matchIndex, 1);
        i--;
      }
    }

    let count = str1.length + str2.length;
    let mod = count % 6;

    setResult(flamesResult[mod]);
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id='main'>
      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        type="text"
        placeholder="Enter first name"
      />

      <input
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        type="text"
        placeholder="Enter second name"
      />

      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateFLAMES}
      >
        Calculate Relationship Future
      </button>

      <button data-testid="clear" name="clear" onClick={clearFields}>
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
