import React, {useState, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

// const initialState = { items: [] };

// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return { items: [...state.items, action.payload] };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleAddItem() {
//     dispatch({ type: "add", payload: "New Item" });
//   }

//   return (
//     <div>
//       <ul>
//         {state.items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button onClick={handleAddItem}>Add Item</button>
//     </div>
//   );
// }


// const initialState = { items: [] };

// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return { items: [...state.items, action.payload] };
//     case "remove":
//       return { items: state.items.filter((item) => item.id !== action.payload) };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [inputValue, setInputValue] = useState("");

//   function handleAddItem() {
//     if (inputValue) {
//       dispatch({ type: "add", payload: { id: Date.now(), text: inputValue } });
//       setInputValue("");
//     }
//   }

//   function handleRemoveItem(id) {
//     dispatch({ type: "remove", payload: id });
//   }

//   return (
//     <div>
//       <ul>
//         {state.items.map((item) => (
//           <li key={item.id}>
//             {item.text}{" "}
//             <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={handleAddItem}>Add Item</button>
//       </div>
//     </div>
//   );
// }


export default Counter;
