import React, {useState} from "react";

import Badge from "./Badge";

const CharacterCounter = ({text, defaults, maxLength}) => {

    const [message, setMessage] = useState("");

    const moods = defaults.map((mood) => (
        <button onClick={() => (setMessage(mood))}>{mood}</button>)
    );

    return (
        <div>
            {moods}
            <textarea 
                placeholder={text}
                value={message}
                onChange={(event) => {
                    if (message.length < maxLength)
                        setMessage(event.target.value);
                }}
            />
            <div>{message.length}/{maxLength}</div>
        </div>

    );
};

export default CharacterCounter;