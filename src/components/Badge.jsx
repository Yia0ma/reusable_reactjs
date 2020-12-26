import React from "react";

const Badge = ({color, children}) => {
    return <span className={`badge ${color}`}>{children}</span>;
};

export default Badge;