import { useAtomValue } from 'jotai';
import React from 'react';
import counterAtom from './counterAtom';

const CounterView = () => {
  const counter = useAtomValue(counterAtom);

  return <div>{counter}</div>;
};

export default CounterView;
