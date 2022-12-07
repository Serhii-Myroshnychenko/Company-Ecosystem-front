import React from 'react';
import {useLocation} from "react-router-dom";
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";

const EmloyeesAddPage = () => {
    const location = useLocation()
    //const [locations, setLocations] = useState([{}]);
    const itemName = "employee"
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const headers = ['id', 'email','role','position','actions']


    async function updateEmployees(inputItems){
        /* let result = await fetch("https://localhost:7032/Locations", {
             method: 'PUT',
             headers: {
                 "Content-Type": "application/json",
                 "Accept": "application/json"
             },
             body: JSON.stringify({id: inputItems.id, title: inputItems.title, chief: inputItems.chief, workingStart: inputItems.workingStart, workingEnd:inputItems.workingEnd}),
         });
         if(result.status == 200){
             alert("Успешно")
         } else{
             alert("Неверные данные")
         }*/
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName}  isAddPage={false}/>
            </div>
        </div>
    );
};

export default EmloyeesAddPage;