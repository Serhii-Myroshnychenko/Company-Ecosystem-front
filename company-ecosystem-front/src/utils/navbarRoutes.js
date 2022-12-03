import {
    EMPLOYERS_ADD_ROUTE,
    EMPLOYERS_EDIT_ROUTE,
    HOME_ROUTE,
    LOCATIONS_ADD_ROUTE,
    LOCATIONS_EDIT_ROUTE,
    LOGIN_ROUTE
} from "./consts";


export const navbarShadow = [LOGIN_ROUTE, HOME_ROUTE]

export const navbarActiveClassName = [
    {
        name: 'locations',
        /*get pathArray() {
            if(Object.keys(arrayOfItems).length === 0)
            [LOCATIONS_ADD_ROUTE, LOCATIONS_EDIT_ROUTE]
        }*/
        pathArray: [LOCATIONS_ADD_ROUTE, LOCATIONS_EDIT_ROUTE]
    },
    {
        name: 'employees',
        pathArray: [EMPLOYERS_ADD_ROUTE, EMPLOYERS_EDIT_ROUTE]
    }


]

/*get filledArrayOfItems() {
    if(Object.keys(arrayOfItems).length === 0) {
        return arrayOfItems = {employees: [{email: 'empty'}]}
    } else {
        return arrayOfItems
    }
}*/


