import React from 'react';
import s from "./styles/Home.module.css"
import Saly from "../img/homePage/Saly.png"
import InputPurple from "../compontents/UI/input/InputPurple";

const Home = ({userName = "user"}) => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <div className={s.leftBlock__content}>
                        <h2 className={s.greetings}>Hello, <span className={`${s.purpleText} ${s.email}`}>asdsdasdasd@gmail.com</span></h2>
                        <h3 className={s.welcome}>Welcome to the system</h3>
                        <div className={s.explanation}>
                                <span className={s.selectTable}>Select the desired table to perform <span
                                    className={s.purpleText}>operations !</span></span>
                            <span className={s.operations}>Then you can perform the following operations: Edit, Delete, Add and Review </span>
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