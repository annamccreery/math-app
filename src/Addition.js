import React from "react";

export const Addition = (props) => {
    console.log(props);
    return (
        <div>
            <h2>
                {props.numberOne} + {props.numberTwo} = {props.numberOne + props.numberTwo}
            </h2>
            <h2>
                {props.numberOne} - {props.numberTwo} = {props.numberOne - props.numberTwo}
            </h2>
            <h2>
                {props.numberOne} * {props.numberTwo} = {props.numberOne * props.numberTwo}
            </h2>
            <h2>
                {props.numberOne} / {props.numberTwo} = {props.numberOne / props.numberTwo}
            </h2>
        </div>
    );
};
