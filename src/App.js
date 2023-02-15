import React from 'react';
import './App.css';
import { Math } from './Math'

const App = () => {
  const styles = {
    container: {
      padding: 20,
      border: "2px solid pink"
    }
  }

  return (
    <div style={styles.container}>
      <Math numberOne={10} numberTwo={20} />
      <Math numberOne={50} numberTwo={100} />
    </div>
  );
};

export default App;
