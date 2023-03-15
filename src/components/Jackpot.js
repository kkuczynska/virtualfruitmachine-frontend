import React from "react";

const Jackpot = ({ jackpot }) => {
    return (
      <div
      style={{
        fontSize: '40px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#615c5c',
        paddingTop: '4%'
      }}
      >
        Jackpot: { jackpot }
      </div>
    );
  };
  
  export default Jackpot;