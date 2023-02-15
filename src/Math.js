import React from "react";

export const Math = ({numberOne, numberTwo}) => {
    return (
        <div>
            <h2>
                {numberOne} + {numberTwo} = {numberOne + numberTwo}
            </h2>
            <h2>
                {numberOne} - {numberTwo} = {numberOne - numberTwo}
            </h2>
            <h2>
                {numberOne} * {numberTwo} = {numberOne * numberTwo}
            </h2>
            <h2>
                {numberOne} / {numberTwo} = {numberOne / numberTwo}
            </h2>
        </div>
    );
};
