import React, { useEffect, useState } from 'react';

const ClickerCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.title = clickCount;
  }, [clickCount]);

  const handleClick = () => setClickCount((clickCount) => clickCount + 1);

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);
  return <div>{clickCount}</div>;
};

export default ClickerCounter;
