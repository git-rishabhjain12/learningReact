import React, { useState } from "react";
// import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Todo() {
  const [inputValue, setValue] = useState("");
  const [inputValues, setValues] = useState([]);
  const [editValue, setEditing] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (editValue === false) {
      setValues([...inputValues, inputValue]);
    } else {
      inputValues[editValue] = inputValue;
      setValues([...inputValues]);
    }
    setValue("");
  }

  function handleDeletion(itemToDelete) {
    // console.log(itemToDelete);
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

  return (
    <>
      <h3>ToDo List</h3>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
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
            <li key={index}>
              {value}
              <DeleteIcon
                className="deleteBtn"
                onClick={() => handleDeletion(index)}
              />
              <EditIcon className="editBtn" onClick={() => handleEdit(index)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
