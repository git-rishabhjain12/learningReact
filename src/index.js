import React from "react";
import ReactDOM from "react-dom/client";
// import { Counter } from "./Counter";
// import Todo from "./Todo";
// import "./Todo.css";
// import GetRandomData from "./fetching/GetRandomData";
// import EcommerceData from "./fetching/EcommerceData";
// import SearchMovie from "./netflix/SearchMovie";
// import Homepage from "./netflix/Homepage";
// import Home from "./ecommerce/Home";
// import Home from "./Routing/Home";.
// import First from "./contextAPI/First";
// import First from "./weatherApp/First";
// import Home from "./IncrementONRefresh/Home";
// import Counter from "./useReduce";
// import Home from "./DogsAPI/Home"
// import Main from "./loginForm/Main";
// import Home from "./counterRedux/Home";
import { Provider } from "react-redux";
// import store from "./counterRedux/store";
import Home from "./todoRedux/Home";
import store from "./todoRedux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="d1">
    {/* <Counter /> */}
    {/* <Todo /> */}
    {/* <GetRandomData /> */}
    {/* <EcommerceData /> */}
    {/* <SearchMovie /> */}
    {/* <Homepage /> */}
    {/* <Home /> */}
    {/* <First /> */}
    {/* <Home /> */}
    {/* <Counter /> */}
    {/* <Main /> */}

    <Provider store={store}>
      <Home />
    </Provider>
  </div>
);
