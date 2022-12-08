import EmployeesItem from "../compontents/AdminItems/EmployeesItem";
import LocationsItem from "../compontents/AdminItems/LocationsItem";
import PostsItem from "../compontents/AdminItems/PostsItem";
import ThingsItem from "../compontents/AdminItems/ThingsItem";
import {EMPLOYERS_ADD_ROUTE, LOCATIONS_ADD_ROUTE, QUESTIONNAIRES_ADD_ROUTE, POSTS_ADD_ROUTE, THINGS_ADD_ROUTE} from "./consts";
import QuestionnairesItem from "../compontents/AdminItems/QuestionnairesItem";

export const itemSelector = (arrayOfItem,flexValue,headerBlock1, updateTable,itemName) => (
    [
        {
            name : "employee", 
            Component : <EmployeesItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable} itemName={itemName}/>,
            addPagePath: EMPLOYERS_ADD_ROUTE
        },
        {
            name : "location", 
            Component : <LocationsItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable} itemName={itemName}/>,
            addPagePath: LOCATIONS_ADD_ROUTE
        },
        {
            name : "questionnaire",
            Component : <QuestionnairesItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable} itemName={itemName}/>,
            addPagePath: QUESTIONNAIRES_ADD_ROUTE
        },
        {
            name : "post",
            Component : <PostsItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable} itemName={itemName}/>,
            addPagePath: POSTS_ADD_ROUTE
        },
        {
            name : "thing",
            Component : <ThingsItem arrayOfItems={arrayOfItem} flexValues={flexValue} headerBlock={headerBlock1} updateTable={updateTable} itemName={itemName}/>,
            addPagePath: THINGS_ADD_ROUTE
        }
    ]
)