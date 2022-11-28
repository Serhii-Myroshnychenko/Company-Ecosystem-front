import EmployeesItem from "../compontents/AdminItems/EmployeesItem";
import LocationsItem from "../compontents/AdminItems/LocationsItem";
import EmployeesEditPage from "../pages/AdminPages/EditPages/EmployeesEditPage";

export const itemSelector = (arrayOfItem,flexValue,headerBlock1, updateTable) => (
    [
        {
            name : "employee", 
            Component : <EmployeesItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable}/>
        },

        {
            name : "location", 
            Component : <LocationsItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable}/>
        }
    ]
)

/*{
            name : "employeeEdit",
            Component : <EmployeesEditItem arrayOfSelectedItem={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1}/>
        },*/