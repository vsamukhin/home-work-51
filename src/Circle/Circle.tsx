import React from 'react';

type NumberProps = {num:number};
const Circle = ({num}:NumberProps) => {
    return (
        <div className="number">
            <b>{num}</b>
        </div>
    );
};

export default Circle;