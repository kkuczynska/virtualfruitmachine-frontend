import React, { useState } from "react";
import Header from "./elements/Header";
import Slots from "./components/Slots";
import Button from "./elements/Button";

const App = () => {
  const [slots, setSlots ] = useState({});

  const drawSlots = () => {
    fetch('http://localhost:8080/draw')
      .then(response => response.json())
      .then(data => {
        setSlots(data.slots);
      })
      .catch(error => console.log(error));
    };

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 20px',
    }}
    >
      <div>
        <Header />
      </div>
      <div>
        <Slots slots={ slots }/>
      </div>
      <div>
        <Button onClick={drawSlots} />
      </div>
    </div>
  );
};

export default App;