
import './App.css';

export const Math = ({numberOne, numberTwo}) => {
    return (
        <div className='container'>
            <h2>
                {numberOne} + {numberTwo} = {(numberOne + numberTwo).toFixed(1)}
            </h2>
            <h2>
                {numberOne} - {numberTwo} = {(numberOne - numberTwo).toFixed(1)}
            </h2>
            <h2>
                {numberOne} * {numberTwo} = {(numberOne * numberTwo).toFixed(1)}
            </h2>
            <h2>
                {numberOne} / {numberTwo} = {(numberOne / numberTwo).toFixed(1)}
            </h2>
        </div>
    );
};
