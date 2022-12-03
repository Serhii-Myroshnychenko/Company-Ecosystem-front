import EmployeesItem from "../compontents/AdminItems/EmployeesItem";
import LocationsItem from "../compontents/AdminItems/LocationsItem";
import EmployeesEditPage from "../pages/AdminPages/EditPages/EmployeesEditPage";
import {EMPLOYERS_ADD_ROUTE, LOCATIONS_ADD_ROUTE} from "./consts";

export const itemSelector = (arrayOfItem,flexValue,headerBlock1, updateTable) => (
    [
        {
            name : "employee", 
            Component : <EmployeesItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable}/>,
            addPagePath: EMPLOYERS_ADD_ROUTE
        },

        {
            name : "location", 
            Component : <LocationsItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable}/>,
            addPagePath: LOCATIONS_ADD_ROUTE
        }
    ]
)

/*{
            name : "employeeEdit",
            Component : <EmployeesEditItem arrayOfSelectedItem={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1}/>
        },*/