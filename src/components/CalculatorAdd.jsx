import React from 'react';

export default function CalculatorAdd() {
  const [a, setA] = React.useState(0);
    
  const [b, setB] = React.useState(0);
    
    
  const [result, setResult] = React.useState(0);
    

  return (
    <div>
      <label htmlFor=""> number 1
        <input type="number" />   
      </label>
      <label htmlFor=""> number 2
        <input type="number" />
      </label>
      <button>Add</button>
    </div>
  );
}
