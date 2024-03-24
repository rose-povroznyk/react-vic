import React, { useState } from 'react';

const CounterH = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    if (count > 0) setCount(count - step);
  };

  const hanldeStepChange = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <div>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <input type='number' value={step} onChange={hanldeStepChange} />
    </div>
  );
};

export default CounterH;
