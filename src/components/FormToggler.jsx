import React, {createElement, useState, useRef} from "react";

import TogglerButton from "./TogglerButton";
import ToggleForm from "./ToggleForm";

const FormToggler = ({data}) => {

    const [currentForm, setCurrentForm] = useState(0);
    const focusRef = useRef(null);

    const togglers = data.map((el, i) => (
        <TogglerButton 
            key={`button-${i}`} 
            toggleForm={() => {
                setCurrentForm(i)
            }}
        >{el.name}</TogglerButton>
    ));

    const forms = data.map((el, i) => (
        <div key={`fomr-${i}`}>
            {createElement(el.component, {ref: focusRef})}
        </div>
    ));

    return (
        <>
            {togglers}
            <ToggleForm index={currentForm}>
                {forms}
            </ToggleForm>
        </>
    );
};

export default FormToggler;