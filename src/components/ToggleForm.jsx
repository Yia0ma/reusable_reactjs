import React from "react";

const ToggleForm = ({children, index}) => {
    if (Array.isArray(children)) return <>{children[index]}</>;
    return null;
};

export default ToggleForm;