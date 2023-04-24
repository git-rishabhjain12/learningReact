import React from "react";
import ReactDOM from "react-dom/client";
// import { Counter } from "./Counter";
// import Todo from "./Todo";
// import "./Todo.css";
// import GetRandomData from "./fetching/GetRandomData";
import EcommerceData from "./fetching/EcommerceData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="d1">
    {/* <Counter /> */}
    {/* <Todo /> */}
    {/* <GetRandomData /> */}
    <EcommerceData />
  </div>
);
