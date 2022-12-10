import { useAtom } from 'jotai';
import React from 'react';
import counterAtom from './counterAtom';

const CounterButton = () => {
  const [, setCounter] = useAtom(counterAtom);

  return (
    <button
      onClick={() => {
        setCounter((counter) => counter + 1);
      }}
    >
      Add Count
    </button>
  );
};

export default CounterButton;
