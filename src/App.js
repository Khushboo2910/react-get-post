import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get request --> String
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response);
    document.getElementById("para").innerHTML = response.data;
  };

  //post request --> string
  const data = "Hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response);
    document.getElementById("para").innerHTML = response.data;
  };

  //post request --> form
  const [formData, setFormData] = useState("");
  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br /> <br />
      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>
      <br />
      <br />
      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};
export default App;
