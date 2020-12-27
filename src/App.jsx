import React from "react";

import Badge from "./components/Badge";
import Counter from "./components/Counter";

const App = () => {
    return (
        <>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
            <Counter/>
        </>
    );
};

export default App;