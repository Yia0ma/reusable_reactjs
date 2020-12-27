import React, {useState, forwardRef, useEffect} from "react";

const RegisterForm = forwardRef((props, ref) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <form>
            <input 
                type="text"
                value={username}
                ref={ref}
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <input 
                type="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <input 
                type="password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            <button>Sign Up</button>
        </form>
    )
});

export default RegisterForm;