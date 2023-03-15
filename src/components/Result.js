import React from "react";

const Result = ({ result, jackpot }) => {
  return (
    <div
      id="resultPopup"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "999",
      }}
      onClick={closeOverlay}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "60px",
              fontFamily: "Arial",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              paddingTop: "4%",
            }}
          >
            {result.message}
          </div>
          <div
            style={{
              fontSize: "40px",
              fontFamily: "Arial",
              fontWeight: "bold",
              color: "#615c5c",
              paddingTop: "4%",
            }}
          >
            Score: {jackpot}
          </div>
        </div>
      </div>
    </div>
  );
};

const closeOverlay = () => {
  document.getElementById("resultPopup").style = "display: none";
};

export default Result;
