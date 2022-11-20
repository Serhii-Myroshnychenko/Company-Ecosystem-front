import Home from "../pages/Home";
import {EMPLOYERS_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "./consts";
import Login from "../pages/Login";
import EmployeesPage from "../pages/AdminPages/EmployeesPage";

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
    {
        path: EMPLOYERS_ROUTE,
        Component: <EmployeesPage/>
    },
]



export const navbarShadow = [LOGIN_ROUTE, HOME_ROUTE]