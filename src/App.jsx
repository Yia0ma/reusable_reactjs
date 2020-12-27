import React, {createElement} from "react";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import FormToggler from "./components/FormToggler";

const App = () => {

    const data = [
        {name: "Log In", component: LoginForm},
        {name: "Sign Up", component: RegisterForm}
    ];

    return (
        <>
            <FormToggler data={data}/>
        </>
    );
};

export default App;