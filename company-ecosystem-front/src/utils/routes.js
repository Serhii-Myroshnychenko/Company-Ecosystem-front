import Home from "../pages/Home";
import {
    EMPLOYERS_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    LOCATIONS_ROUTE,
    EMPLOYERS_EDIT_ROUTE,
    LOCATIONS_EDIT_ROUTE,
    LOCATIONS_ADD_ROUTE,
    EMPLOYERS_ADD_ROUTE, QUESTIONNAIRES_ROUTE, QUESTIONNAIRES_EDIT_ROUTE, QUESTIONNAIRES_ADD_ROUTE,
    POSTS_ROUTE,POSTS_ADD_ROUTE,POSTS_EDIT_ROUTE,
    THINGS_ROUTE,THINGS_ADD_ROUTE,THINGS_EDIT_ROUTE
} from "./consts";
import Login from "../pages/Login";
import EmployeesPage from "../pages/AdminPages/MainPages/EmployeesPage";
import LocationsPage from "../pages/AdminPages/MainPages/LocationsPage";
import EmployeesEditPage from "../pages/AdminPages/EditPages/EmployeesEditPage";
import LocationsEditPage from "../pages/AdminPages/EditPages/LocationsEditPage";
import LocationsAddPage from "../pages/AdminPages/AddPages/LocationsAddPage";
import QuestionnairesPage from "../pages/AdminPages/MainPages/QuestionnairesPage";
import QuestionnairesEditPage from "../pages/AdminPages/EditPages/QuestionnairesEditPage";
import QuestionnairesAddPage from "../pages/AdminPages/AddPages/QuestionnairesAddPage";
import PostsPage from "../pages/AdminPages/MainPages/PostsPage";
import PostsEditPage from "../pages/AdminPages/EditPages/PostsEditPage";
import PostsAddPage from "../pages/AdminPages/AddPages/PostsAddPage";
import ThingsPage from "../pages/AdminPages/MainPages/ThingsPage";
import ThingsAddPage from "../pages/AdminPages/AddPages/ThingsAddPage";
import ThingsEditPage from "../pages/AdminPages/EditPages/ThingsEditPage";

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
        path: EMPLOYERS_ADD_ROUTE,
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
    },
    {
        path: QUESTIONNAIRES_ROUTE,
        Component: <QuestionnairesPage/>
    },
    {
        path: QUESTIONNAIRES_EDIT_ROUTE,
        Component: <QuestionnairesEditPage/>
    },
    {
        path: QUESTIONNAIRES_ADD_ROUTE,
        Component: <QuestionnairesAddPage/>
    },
    {
        path: POSTS_ROUTE,
        Component: <PostsPage/>
    },
    {
        path: POSTS_EDIT_ROUTE,
        Component: <PostsEditPage/>
    },
    {
        path: POSTS_ADD_ROUTE,
        Component: <PostsAddPage/>
    },
    {
        path: THINGS_ROUTE,
        Component: <ThingsPage/>
    },
    {
        path: THINGS_EDIT_ROUTE,
        Component: <ThingsEditPage/>
    },
    {
        path: THINGS_ADD_ROUTE,
        Component: <ThingsAddPage/>
    },
    
]

