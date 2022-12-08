import React, {useEffect, useState} from 'react';
import s from "./styles/Navbar.module.css"
import {Link, NavLink, useLocation} from "react-router-dom";
import logo from "../img/logo/Logo.png"
import {
    EMPLOYERS_ROUTE,
    HOME_ROUTE,
    LOCATIONS_ROUTE, LOGIN_ROUTE,
    POSTS_ROUTE, QUESTIONNAIRES_ROUTE,
    THINGS_ROUTE
} from "../utils/consts";
import {useTranslation} from "react-i18next";
import "../utils/i18next";
import {navbarActiveClassName, navbarShadow} from "../utils/navbarRoutes";

const Navbar = ({isAuth}) => {

    //const activeNavbarClass = (navData) => (navData?.isActive ? s.activeLink : s.menu__link );


    const [navbarShadowState, setNavbarShadowState] = useState('drop-shadow(0px 4px 5px #EFEFEF)');
    const [displayedItemName, setDisplayedItemName] = useState('')
    const location = useLocation()

    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };


    useEffect(() => {
        changeNavbarShadow();
        checkIsActiveNavbarClass()
    }, [location.pathname])



    const changeNavbarShadow = () => {
        for (let path of navbarShadow) {
            if(path === location.pathname)
            {
                setNavbarShadowState('none')
                break
            }
            setNavbarShadowState('drop-shadow(0px 4px 5px #EFEFEF)')
        }
    }
    const activeNavbarClass = (navData) => {
        if(navData.isActive) {
            return s.activeLink
        } else {
            return s.menu__link
        }
    }

    const checkIsActiveNavbarClass = () => {
        const resultPathArray = navbarActiveClassName
            .map(item => item)
            .filter(el => el.name === displayedItemName)[0]?.pathArray
        resultPathArray?.forEach(path => {
            if(path === location.pathname) {
                activeNavbarClass({isActive(match, location) {
                    match(true)
                        location(location.pathname)
                    }})
            }
        })
    }


    return (
        <header className={s.header} style={{filter: `${navbarShadowState}`}} >
            <div className={s.headerContainer}>
                <Link to={HOME_ROUTE}>
                    <div className={s.logoBlock}>
                        <img src={logo} alt="Logo" className={s.logo__img}/>
                        <div className={s.logo__text}>Ecosystem</div>
                    </div>
                </Link>
                {isAuth ?
                    <nav className={s.menu}>
                        <ul className={s.menu__ul} >
                            <li className={s.menu__li}>
                                <NavLink to={EMPLOYERS_ROUTE} onClick={() => setDisplayedItemName('employees')} className={activeNavbarClass}>Employees</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={LOCATIONS_ROUTE} onClick={() => setDisplayedItemName('locations')} className={activeNavbarClass}>Locations</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={POSTS_ROUTE} onClick={() => setDisplayedItemName('posts')} className={activeNavbarClass}>Posts</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={THINGS_ROUTE} onClick={() => setDisplayedItemName('things')} className={activeNavbarClass}>Things</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={QUESTIONNAIRES_ROUTE} onClick={() => setDisplayedItemName('questionnaires')} className={activeNavbarClass}>Questionnaires</NavLink>
                            </li>
                            <li>
                            <div >
                              <button onClick={() => changeLanguage("ua")} >UA</button>
                              <button onClick={() => changeLanguage("eng")}>ENG</button>
                          </div>  
                            </li>
                        </ul>
                    </nav>
                    :
                    <div></div>
                }

            </div>
        </header>
    );
};

export default Navbar;