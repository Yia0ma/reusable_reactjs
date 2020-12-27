import React from "react";

const TogglerButton = ({children, toggleForm}) => {
    return (
        <button onClick={() => {
            toggleForm()
        }}>{children}</button>
    )
};

export default TogglerButton;