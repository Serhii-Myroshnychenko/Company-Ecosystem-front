import React, {useState} from 'react';
import InputPurple from "./UI/input/InputPurple";
import ButtonPurple from "./UI/button/ButtonPurple";
import s from "./styles/LoginForm.module.css"
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";

const LoginForm = () => {

    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Token, setToken] = useState("");

    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();
        let result = await fetch("https://localhost:7032/Account/authenticate", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({email: Email, password: Password}),
        });
        if(result.status === 200){
            var employee = await result.json();
            setToken(employee.token)
        }
        else{
            alert("Неверные данные")
        }
    }


    return (
        <div className={s.signInContainer}>
            <h3 className={s.titleText}>Sign in</h3>
                <InputPurple type="text" placeholder="Enter email or user name" onChange={(e)=>setEmail(e.target.value)} />
                <InputPurple style={{marginTop: "32px", marginBottom: "60px"}} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <ButtonPurple onClick={login}>Login</ButtonPurple>
        </div>
    );
};
export default LoginForm;