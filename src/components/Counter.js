import React from 'react';

function Counter({
    count,
    handleIncrement,
    handleDecrement
}) {
    return (
            <h1>
                <button onClick={handleDecrement}>-</button>
                {count}
                <button onClick={handleIncrement}>+</button>
            </h1>
        
    );
}

export default Counter;