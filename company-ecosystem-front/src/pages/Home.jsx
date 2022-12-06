import React, {useState} from 'react';
import s from "./styles/Home.module.css"
import Saly from "../img/homePage/Saly.svg"
import InputPurple from "../compontents/UI/input/InputPurple";
import ButtonPurple from "../compontents/UI/button/ButtonPurple";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const Home = () => {

    const navigate = useNavigate()
    const userEmail = localStorage.getItem('userEmail')
    const logout = () => {
        localStorage.removeItem('isAuth')
        localStorage.removeItem('userEmail')
        window.location.reload()
        navigate(LOGIN_ROUTE)
    }

    return (
        <div>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <div className={s.leftBlock__content}>
                        <h2 className={s.greetings}>Hello, <span className={`${s.purpleText} ${s.email}`}>{userEmail}</span></h2>
                        <h3 className={s.welcome}>Welcome to the system</h3>
                        <div className={s.explanation}>
                                <span className={s.selectTable}>Select the desired table to perform <span
                                    className={s.purpleText}>operations !</span></span>
                            <span className={s.operations}>Then you can perform the following operations: Edit, Delete, Add and Review </span>
                        </div>
                        <div className={s.exitButtonContainer}>
                            <ButtonPurple onClick={logout}>Вийти з акаунту</ButtonPurple>
                        </div>
                    </div>
                </div>
                <div className={s.imageContainer}>
                    <img src={Saly} alt="image"/>
                </div>
            </div>
        </div>
    );
};

export default Home;