import React from "react";

const Header = () => {
    return (
      <div>
        <h1 
                style={{
                  fontFamily: 'Garamond ',
                  fontSize: '130px',
                  justifyContent: 'right',
                  marginTop: '2%',
                  marginBottom: '0%'
                }}
                >Virtual Fruit Machine</h1>
        <p
        style={{
            fontSize: '12px',
            fontStyle: 'italic',
            justifyContent: 'right',
            marginBottom: '3%'
          }}
          >by Phorest</p>
      </div>
    );
  };
  
export default Header;