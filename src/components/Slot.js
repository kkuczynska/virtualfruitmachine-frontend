import React from "react";

const Slot = ({ slot }) => {
    return (
      <div
      style={{
        backgroundColor: slot.hex,
        width: '249px',
        height: '230px',
        display: 'inline-block',
        margin: '5px',
        border: '3px solid gray',
      }}
    ></div>
      );
};

export default Slot;