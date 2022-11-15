import React, {useState} from 'react';
import s from './InputPurple.module.css'

const InputPurple = (props) => {
    return (
        <input className={s.purpleInput} {...props}/>
    );
};

export default InputPurple;