import React, { useState } from "react";

function Todo() {
  const [inputValue, setValue] = useState("");
  const [inputValues, setValues] = useState([]);

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSumbit(e) {
    e.preventDefault();
    setValues([...inputValues, inputValue]);
    setValue("");
  }

  return (
    <>
      <h3>ToDo List</h3>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="sumbit">Add Task</button>
      </form>
      <ul>
        {inputValues.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
}

export default Todo;
