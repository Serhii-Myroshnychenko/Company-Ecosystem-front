import {
    EMPLOYERS_ADD_ROUTE,
    EMPLOYERS_EDIT_ROUTE,
    HOME_ROUTE,
    LOCATIONS_ADD_ROUTE,
    LOCATIONS_EDIT_ROUTE, LOCATIONS_ROUTE,
    LOGIN_ROUTE
} from "./consts";


export const navbarShadow = [LOGIN_ROUTE, HOME_ROUTE]

export const navbarActiveClassName = [
    {
        name: 'locations',
        pathArray: [LOCATIONS_ADD_ROUTE, LOCATIONS_EDIT_ROUTE, LOCATIONS_ROUTE]
    },
    {
        name: 'employees',
        pathArray: [EMPLOYERS_ADD_ROUTE, EMPLOYERS_EDIT_ROUTE]
    }
]

