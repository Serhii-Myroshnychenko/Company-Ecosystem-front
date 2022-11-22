import React from 'react';
import s from "./Inputs.module.css";

const InputAdmin = (props) => {
    return (
        <input className={s.inputAdmin} {...props}/>
    );
};

export default InputAdmin;