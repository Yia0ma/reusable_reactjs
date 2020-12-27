import React, {useState, forwardRef, useEffect} from "react";

const LoginForm = forwardRef((props, ref) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <form>
            <input 
                type="email"
                value={email}
                ref={ref}
                onChange={(event => {
                    setEmail(event.target.value)
                })}
            />
            <input 
                type="password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            <button>Login</button>
        </form>
    );
});

export default LoginForm;