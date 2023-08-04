import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/", {})
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(" Api is not working");
      });
    console.log("Page is rendered.");
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
    </div>
  );
};

export default App;
