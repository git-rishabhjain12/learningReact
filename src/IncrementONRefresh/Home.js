import React, { useEffect, useState } from "react";

function Home() {
  const [num, setNum] = useState(
    sessionStorage.getItem("number") !== null
      ? JSON.parse(sessionStorage.getItem("number"))
      : 0
  );

  useEffect(() => {
    setNum(num + 1);
    sessionStorage.setItem("number", (num + 1).toString());
  }, []);

  return <h1>{num}</h1>;
}

export default Home;
