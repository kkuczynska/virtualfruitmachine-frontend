import React, { useState, useEffect } from "react";
import Header from "./elements/Header";
import Slots from "./components/Slots";
import Button from "./elements/Button";
import Jackpot from "./components/Jackpot";
import Result from "./components/Result";

const App = () => {
  const [slots, setSlots] = useState({});
  const [jackpot, setJackpot] = useState();
  const [result, setResult] = useState();
  const [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    getJackpot();
  }, []);

  useEffect(() => {
    getResult();
  });

  const drawSlots = () => {
    fetch("http://localhost:8080/draw")
      .then((response) => response.json())
      .then((data) => {
        setSlots(data.slots);
        getJackpot();
      })
      .catch((error) => console.log(error));
  };

  const getJackpot = () => {
    fetch("http://localhost:8080/jackpot")
      .then((response) => response.json())
      .then((data) => {
        setJackpot(data.currentJackpot);
      })
      .catch((error) => console.log(error));
  };

  const getResult = () => {
    fetch("http://localhost:8080/result")
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setDisplayResult(result.result !== "TRY_AGAIN");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
      }}
    >
      <div>
        <Header />
      </div>
      <div>
        <Slots slots={slots} />
      </div>
      <div>
        <Jackpot jackpot={jackpot} />
      </div>
      <div>
        <Button onClick={drawSlots} />
      </div>
      <div>{displayResult && <Result result={result} jackpot={jackpot} />}</div>
    </div>
  );
};

export default App;