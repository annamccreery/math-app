import React from "react";

export const Math = ({numberOne, numberTwo}) => {
    return (
        <div>
            <h2>
                {numberOne} + {numberTwo} = {(numberOne + numberTwo).toFixed(3)}
            </h2>
            <h2>
                {numberOne} - {numberTwo} = {(numberOne - numberTwo).toFixed(3)}
            </h2>
            <h2>
                {numberOne} * {numberTwo} = {(numberOne * numberTwo).toFixed(3)}
            </h2>
            <h2>
                {numberOne} / {numberTwo} = {(numberOne / numberTwo).toFixed(3)}
            </h2>
        </div>
    );
};
