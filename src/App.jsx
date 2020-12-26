import React from "react";

import Badge from "./components/Badge";

const App = () => {
    return (
        <>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
        </>
    );
};

export default App;