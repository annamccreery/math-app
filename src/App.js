import React from 'react';
import './App.css';
import { Addition } from './Addition'

const App = () => {
  return (
    <>
      <Addition numberOne={10} numberTwo={20} />
      <Addition numberOne={50} numberTwo={100} />
    </>
  );
};

export default App;
