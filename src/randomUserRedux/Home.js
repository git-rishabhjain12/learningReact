import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Corrected import statement
import { fetchRandomUser } from "./randomUserSlice";

function Home() {
  const dispatch = useDispatch();

  function getRandomdata() {
    dispatch(fetchRandomUser());
  }

  const init = useSelector((state) => {
    return state.randomUserReducer;
  });

    console.log(init.data);

  if (init.isLoading) {
    return <div>Loading data...</div>; // Corrected return statement
  }

  return (
    <>
      <button onClick={getRandomdata}>Get Random User</button>
      {Object.keys(init.data).length > 0 ? (
        <div className="randomData">
          <img src={init.data.picture.large} alt={init.data.name.first} />
          <h2>
            {init.data.name.first} {init.data.name.last}
          </h2>
          <p>{init.data.email}</p>
        </div>
      ) : null // Corrected empty state return
      }
    </>
  );
}

export default Home;
