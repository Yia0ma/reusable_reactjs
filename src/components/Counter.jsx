import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => setCount(count + 1);

    const subtract = () => setCount(count - 1);

    return (
        <div className="counter">
            <button onClick={add}>+</button>
            <input 
                type="number"
                value={count}
                onChange={(event) => {
                    setCount(parseInt(event.target.value));
                }}
            />
            <button onClick={subtract}>-</button>
        </div>
    )
};

export default Counter;