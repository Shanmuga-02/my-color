import './App.css';
import React, { useState } from 'react';


function App() {
  var newcolor;
  const [color, setColor] = useState("white");
  const changecolor = (e) => {

    newcolor = e.target.value;
    console.log(newcolor);
  }
  const updatecolor = () => {
    setColor(newcolor);
  }
  console.log(newcolor);
  return (
    <center>
      <div>
        <div style={{ backgroundColor: color, border:"2px solid grey",height: "300px", width: "300px" }}>

        </div>
        <div>
          <input onChange={changecolor} />
          <button onClick={updatecolor}>Update</button>
        </div>
      </div>
    </center>
  );
}

export default App;
