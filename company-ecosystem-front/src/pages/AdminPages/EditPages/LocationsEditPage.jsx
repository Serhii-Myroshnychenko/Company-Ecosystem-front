import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";


const LocationsEditPage = (props) => {
    const location = useLocation()
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state  // Для отрисовки Item-а из LocationsItem
    //const [locations, setLocations] = useState([{...arrayOfSelectedItem}]);
    const itemName = "location"
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','photo','actions']


    async function updateLocations(inputItems){
        let result = await fetch("https://localhost:7032/Location", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ title: inputItems.title, chief: inputItems.chief,
                workingStart: inputItems.workingStart, workingEnd:inputItems.workingEnd, photo: inputItems.photo, id: inputItems.id}),
        });
        if(result.status == 200){
            alert("Успешно")
        } else{
            alert("Неверные данные")
            console.log(result)
        }
        console.log(inputItems)
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={updateLocations} isAddPage={true}/>
            </div>
        </div>
    );
};

export default LocationsEditPage;