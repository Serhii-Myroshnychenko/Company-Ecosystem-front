import Home from "../pages/Home";
import {EMPLOYERS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, LOCATIONS_ROUTE, EMPLOYERS_EDIT_ROUTE,LOCATIONS_EDIT_ROUTE,LOCATIONS_ADD_ROUTE} from "./consts";
import Login from "../pages/Login";
import EmployeesPage from "../pages/AdminPages/MainPages/EmployeesPage";
import LocationsPage from "../pages/AdminPages/MainPages/LocationsPage";
import LocationsItem from "../compontents/AdminItems/LocationsItem"
import EmployeesItem from "../compontents/AdminItems/EmployeesItem"
import EmployeesEditPage from "../pages/AdminPages/EditPages/EmployeesEditPage";
import LocationsEditPage from "../pages/AdminPages/EditPages/LocationsEditPage";
import LocationsAddPage from "../pages/AdminPages/AddPages/LocationsAddPage";

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
        path: EMPLOYERS_EDIT_ROUTE,
        Component: <EmployeesEditPage/>
    },
    {
        path: LOCATIONS_ROUTE,
        Component: <LocationsPage/>
    },
    {
        path: LOCATIONS_EDIT_ROUTE,
        Component: <LocationsEditPage/>
    },
    {
        path: LOCATIONS_ADD_ROUTE,
        Component: <LocationsAddPage/>
    }
]

export const navbarShadow = [LOGIN_ROUTE, HOME_ROUTE]