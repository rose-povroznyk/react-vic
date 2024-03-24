import React, { useEffect, useState } from 'react';

const StopwatchH = () => {
  const [count, setCount] = useState(new Date(0, 0, 0, 0, 0, 0, 0));

  const [id, setId] = useState(null);

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, [count]);

  const tick = () => {
    setCount((count) => {
      const newCount = new Date(count.valueOf());
      newCount.setSeconds(count.getSeconds() + 1);
      return newCount;
    });
  };
  const start = () => {
    if (!id) {
      setId(setInterval(tick, 1000));
    }
  };
  const stop = () => {
    clearInterval(id);
    setId(null);
  };
  const reset = () => {
    setCount(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <article>
      <div>{count.toLocaleTimeString('en-GB')}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </article>
  );
};

export default StopwatchH;
