import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";


const LocationsEditPage = (props) => {
    const location = useLocation()
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state  // Для отрисовки Item-а из LocationsItem
    //const [locations, setLocations] = useState([{...arrayOfSelectedItem}]);
    const itemName = "location"
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','actions']


    async function updateLocations(inputItems){
        let result = await fetch("https://localhost:7032/Locations", {
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
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={updateLocations}/>
            </div>
        </div>
    );
};

export default LocationsEditPage;