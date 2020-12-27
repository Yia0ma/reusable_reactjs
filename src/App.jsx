import React from "react";

import Badge from "./components/Badge";
import Counter from "./components/Counter";
import CharacterCounter from "./components/CharacterCounter";

const App = () => {
    return (
        <>
            <CharacterCounter 
                text={"How was your day?"}
                defaults={["Great", "Okay", "Bad"]}
                maxLength={255}
            />
        </>
    );
};

export default App;