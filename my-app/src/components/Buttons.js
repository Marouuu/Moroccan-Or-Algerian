import React from 'react';

const ButtonGroup = ({ handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick('Marocain')}>Marocain</button>
      <button onClick={() => handleClick('Algérien')}>Algérien</button>
    </div>
  );
}

export default ButtonGroup;