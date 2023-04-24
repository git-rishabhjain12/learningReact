import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import "./Todo.css";

function Todo() {
  const [inputValue, setValue] = useState("");
  const [inputValues, setValues] = useState([]);
  const [editValue, setEditing] = useState(false);
  const [completedValue, setCompleted] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (editValue === false) {
      setValues([...inputValues, inputValue]);
    } else {
      inputValues[editValue] = inputValue;
      setEditing(false);
    }
    setValue("");
  }

  function handleDeletion(itemToDelete) {
    setValues(
      inputValues.filter((value, index) => {
        return index !== itemToDelete;
      })
    );
  }

  function handleEdit(itemToEdit) {
    setValue(inputValues[itemToEdit]);
    setEditing(itemToEdit);
  }

  function handleCompleted(itemCompleted) {
    setCompleted([...completedValue, itemCompleted]);
  }

  return (
    <>
      <h3 className="heading">ToDo List</h3>
      <form onSubmit={handleSumbit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter Your Name"
          autoFocus
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {inputValues.map((value, index) => {
          return (
            <li
              className={completedValue.includes(index) ? "completed" : ""}
              key={index}
            >
              {value}
              <DeleteIcon
                onClick={() => handleDeletion(index)}
              />
              <EditIcon className="editBtn" onClick={() => handleEdit(index)} />
              <DoneIcon
                className="doneBtn"
                onClick={() => handleCompleted(index)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
