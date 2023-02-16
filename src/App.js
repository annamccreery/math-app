import './App.css';
import { Math } from './Math'
import { Darkmode } from './Darkmode';

const App = () => {
  return (
    <>
        <Darkmode />

        <Math numberOne={10} numberTwo={20} />
        <Math numberOne={1} numberTwo={18} />
    </>

  );
};

export default App;
