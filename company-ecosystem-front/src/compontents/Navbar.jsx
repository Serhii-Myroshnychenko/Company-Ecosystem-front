import React, {useEffect, useState} from 'react';
import s from "./styles/Navbar.module.css"
import {Link, NavLink, useLocation} from "react-router-dom";
import logo from "../img/logo/Logo.png"
import {
    EMPLOYERS_ROUTE,
    HOME_ROUTE,
    LOCATIONS_ROUTE, LOGIN_ROUTE,
    PHOTO_THINGS_ROUTE,
    POSTS_ROUTE, QUESTIONNAIRES_ROUTE,
    THINGS_ROUTE
} from "../utils/consts";
import {navbarActiveClassName, navbarShadow} from "../utils/navbarRoutes";

const Navbar = ({isAuth}) => {

    const activeNavbarClass = (navData) => (navData.isActive ? s.activeLink : s.menu__link);
    const [navbarShadowState, setNavbarShadowState] = useState('drop-shadow(0px 4px 5px #EFEFEF)');
    const location = useLocation()

    useEffect(() => {
        changeNavbarShadow();
       /* checkIsActiveNavbarClass()*/
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

   /* const checkIsActiveNavbarClass = (displayedItemName) => {
        const resultPathArray = navbarActiveClassName
            .map(item => item)
            .filter(el => el.name === displayedItemName)[0].pathArray
        console.log(resultPathArray)
    }*/

    return (
        <header className={s.header} style={{filter: `${navbarShadowState}`}} >
            <div className={s.headerContainer}>
                <Link to={HOME_ROUTE}>
                    <div className={s.logoBlock}>
                        <img src={logo} alt="Logo" className={s.logo__img}/>
                        <div className={s.logo__text}>Ecosystem</div>
                    </div>
                </Link>
                {isAuth === '1' ?
                    <nav className={s.menu}>
                        <ul className={s.menu__ul}>
                            <li className={s.menu__li}>
                                <NavLink to={EMPLOYERS_ROUTE} className={activeNavbarClass}>Employees</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={LOCATIONS_ROUTE} className={activeNavbarClass} >Locations</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={POSTS_ROUTE} className={activeNavbarClass}>Posts</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={THINGS_ROUTE} className={activeNavbarClass}>Things</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={PHOTO_THINGS_ROUTE} className={activeNavbarClass}>PhotoThings</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={QUESTIONNAIRES_ROUTE} className={activeNavbarClass}>Questionnaires</NavLink>
                            </li>
                            <li className={s.menu__li}>
                                <NavLink to={LOGIN_ROUTE} className={activeNavbarClass}>Login</NavLink>
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