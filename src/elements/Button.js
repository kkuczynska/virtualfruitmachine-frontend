import React from "react";

const Button = ({ onClick }) => {
    return (
      <div>
        <button 
              style={{
                display: 'inline-block',
                marginTop: '30px',
                padding: '10px 20px',
                fontSize: '32px',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#ffffff',
                backgroundColor: '#CC5500',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                width: '1060px',
                height: '70px'
              }}
              onClick={onClick}
              >Draw</button>
      </div>
    );
  };
  
export default Button;