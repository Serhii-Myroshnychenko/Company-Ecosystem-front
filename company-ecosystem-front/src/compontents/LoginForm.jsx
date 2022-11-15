import React from 'react';
import InputPurple from "./UI/input/InputPurple";
import ButtonPurple from "./UI/button/ButtonPurple";
import s from "./styles/LoginForm.module.css"
const LoginForm = () => {
    return (
        <div className={s.signInContainer}>
            <h3 className={s.titleText}>Sign in</h3>
            <form action="">
                <InputPurple type="text" placeholder="Enter email or user name" />
                <InputPurple style={{marginTop: "32px", marginBottom: "60px"}} type="password" placeholder="Password"/>
                <ButtonPurple>Login</ButtonPurple>
            </form>
        </div>
    );
};

export default LoginForm;