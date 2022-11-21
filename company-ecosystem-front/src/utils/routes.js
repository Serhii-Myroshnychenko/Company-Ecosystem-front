import Home from "../pages/Home";
import {EMPLOYERS_ROUTE, HOME_ROUTE, LOGIN_ROUTE,LOCATIONS_ROUTE} from "./consts";
import Login from "../pages/Login";
import EmployeesPage from "../pages/AdminPages/EmployeesPage";
import LocationsPage from "../pages/AdminPages/LocationsPage";
import LocationsItem from "../compontents/AdminItems/LocationsItem"
import EmployeesItem from "../compontents/AdminItems/EmployeesItem"

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
    {
        path: LOCATIONS_ROUTE,
        Component: <LocationsPage/>
    }
]

export const navbarShadow = [LOGIN_ROUTE, HOME_ROUTE]