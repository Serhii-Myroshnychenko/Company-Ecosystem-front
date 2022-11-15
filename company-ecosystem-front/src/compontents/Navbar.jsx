import React from 'react';
import s from "./styles/Navbar.module.css"
import {Link, NavLink} from "react-router-dom";
import logo from "../img/logo/Logo.png"
import {
    EMPLOYERS_ROUTE,
    HOME_ROUTE,
    LOCATIONS_ROUTE,
    PHOTO_THINGS_ROUTE,
    POSTS_ROUTE, QUESTIONNAIRES_ROUTE,
    THINGS_ROUTE
} from "../utils/consts";

const Navbar = () => {

    const activeNavbarClass = (navData) => (navData.isActive ? s.activeLink : s.menu__link);

    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <Link to={HOME_ROUTE}>
                    <div className={s.logoBlock}>
                        <img src={logo} alt="Logo" className={s.logo__img}/>
                        <div className={s.logo__text}>Ecosystem</div>
                    </div>
                </Link>
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
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;