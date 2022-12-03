import React, {useState} from 'react';
import InputPurple from "./UI/input/InputPurple";
import ButtonPurple from "./UI/button/ButtonPurple";
import s from "./styles/LoginForm.module.css"
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";

const LoginForm = ({login}) => {
    //const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [loginData, setLoginData] = useState({email: '', password: ''})

    return (
        <div className={s.signInContainer}>
            <h3 className={s.titleText}>Sign in</h3>
            <InputPurple type="text"
                         placeholder="Enter email"
                         value={email}
                         onChange={e => setEmail(e.target.value)}

            />
            <InputPurple style={{marginTop: "32px", marginBottom: "60px"}}
                         type="password"
                         placeholder="Password"
                         value={password}
                         onChange={e => setPassword(e.target.value)}
            />
            <ButtonPurple onClick={() => login(email, password)}>Login</ButtonPurple>
        </div>
    );
};

export default LoginForm;