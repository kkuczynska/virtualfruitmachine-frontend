import React from "react";
import Slot from "./Slot";

const Slots = ({ slots }) => {
    return (
      <div
      style={{
        width: '1060px',
        height: '250px',
        border: '3px solid red',
        borderRadius: '5px'
      }}
      >
        {Object.values(slots).map((key, index) => (
        <Slot slot={key} key={index} />
      ))}
      </div>
    );
  };

export default Slots;