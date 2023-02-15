import React from 'react';
import './App.css';
import { Math } from './Math'

const App = () => {
  return (
    <div>
      <Math numberOne={10} numberTwo={20} />
      <Math numberOne={1} numberTwo={18} />
    </div>
  );
};

export default App;
