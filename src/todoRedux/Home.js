import React from "react";
import {
  setInput,
  setTasks,
  deleteTask,
  editTask,
  completedTask,
} from "./slices/todoSlices";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import "./css.css";
function Home() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTasks());
  };

  const handleDelete = (e, index) => {
    e.preventDefault();
    dispatch(deleteTask(index));
  };

  const handleEdit = (e, index) => {
    e.preventDefault();
    dispatch(editTask(index));
  };

  const handleComplete = (e, index) => {
    e.preventDefault();
    dispatch(completedTask(index));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={todo.input}
          onChange={(e) => dispatch(setInput(e.target.value))}
          autoFocus
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.tasks.map((task, index) => {
          return (
            <li
              key={index}
              className={todo.complete.includes(index) ? "completed" : ""}
            >
              {task}
              <a href="" onClick={(e) => handleEdit(e, index)}>
                <EditIcon />
              </a>
              <a href="" onClick={(e) => handleComplete(e, index)}>
                <CheckIcon />
              </a>
              <a href="" onClick={(e) => handleDelete(e, index)} >
                <DeleteIcon />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
