import React, {useState} from 'react';
import InputPurple from "./UI/input/InputPurple";
import ButtonPurple from "./UI/button/ButtonPurple";
import s from "./styles/LoginForm.module.css"
import {useTranslation} from "react-i18next";
import "../utils/i18next";

const LoginForm = ({login}) => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={s.signInContainer}>
            <h3 className={s.titleText}>{t("LoginForm.titleText")}</h3>
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
            <ButtonPurple onClick={() => login(email, password)}>{t("LoginForm.button")}</ButtonPurple>
        </div>
    );
};

export default LoginForm;