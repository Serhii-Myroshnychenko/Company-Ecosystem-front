import React from 'react';
import s from './styles/Login.module.css'
import LoginForm from "../compontents/LoginForm";
import Saly from "../img/login/Saly.svg"
import {HOME_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../utils/i18next";

const Login = ({setIsUserAuth}) => {

    const navigate = useNavigate();
    const {t} = useTranslation();
    async function login(email, password) {
        let result = await fetch("https://localhost:7032/Account/authenticate", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({email: email, password: password}),
        });
        if(result.status === 200){
            setIsUserAuth(true)
            localStorage.setItem('isAuth', JSON.stringify(true));
            result = await result.json();
            localStorage.setItem("userEmail", JSON.stringify(result.email));
            navigate(HOME_ROUTE)
        } else {
            alert(t("Alert.error"));
        }
    }

    return (
        <div className={s.loginContainer}>
            <div className={s.content}>
                <div className={s.leftColumn}>
                    <div className={s.textBlock}>
                        <h2 className={s.signIn}>{t("Login.signIn")} </h2>
                        <h3 className={s.companyEcosystem}>Company Ecosystem </h3>
                        <span className={s.description}>{t("Login.description")} <span className={s.manage}>{t("Login.manage1")}</span> {t("Login.manage2")} <br/>{t("Login.manage3")}  </span>
                    </div>
                    <div className={s.imageContainer}>
                        <img src={Saly} alt="Saly"/>
                    </div>
                </div>
                <div className={s.rightColumn}>
                    <LoginForm login={login}/>
                </div>
            </div>
        </div>
    );
};

export default Login;