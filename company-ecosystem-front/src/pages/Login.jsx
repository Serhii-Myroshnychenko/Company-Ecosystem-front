import React from 'react';
import s from './styles/Login.module.css'
import LoginForm from "../compontents/LoginForm";
import Saly from "../img/login/Saly.svg"

const Login = () => {
    return (
        <div className={s.loginContainer}>
            <div className={s.content}>
                <div className={s.leftColumn}>
                    <div className={s.textBlock}>
                        <h2 className={s.signIn}>Sign in to </h2>
                        <h3 className={s.companyEcosystem}>Company Ecosystem </h3>
                        <span className={s.description}>Here you can <span className={s.manage}>manage</span> all the important <br/>parts of the system!  </span>
                    </div>
                    <div className={s.imageContainer}>
                        <img src={Saly} alt="Saly"/>
                    </div>
                </div>
                <div className={s.rightColumn}>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default Login;