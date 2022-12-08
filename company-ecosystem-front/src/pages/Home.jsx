import React from 'react';
import s from "./styles/Home.module.css"
import Saly from "../img/homePage/Saly.svg"
import ButtonPurple from "../compontents/UI/button/ButtonPurple";
import { useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {useTranslation} from "react-i18next";
import "../utils/i18next";

const Home = () => {

    const navigate = useNavigate()
    const {t} = useTranslation();
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
                        <h2 className={s.greetings}>{t("Home.greetings")} <span className={`${s.purpleText} ${s.email}`}>{userEmail}</span></h2>
                        <h3 className={s.welcome}>{t("Home.welcome")} </h3>
                        <div className={s.explanation}>
                                <span className={s.selectTable}>{t("Home.selectTable")} <span
                                    className={s.purpleText}>{t("Home.purpleText")} </span></span>
                            <span className={s.operations}>{t("Home.operations")} </span>
                        </div>
                        <div className={s.exitButtonContainer}>
                            <ButtonPurple onClick={logout}>{t("Home.exitButtonContainer")}</ButtonPurple>
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