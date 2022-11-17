import Home from "../pages/Home";
import {EMPLOYERS_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "./consts";
import Login from "../pages/Login";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login/>
    },
]

export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
]

/*
export const navbarShadow = [
    {
        path: EMPLOYERS_ROUTE
    },
    {
        path: HOME_ROUTE
    },
    {
        path: LOGIN_ROUTE
    },
]*/

export const navbarShadow = [LOGIN_ROUTE, HOME_ROUTE]