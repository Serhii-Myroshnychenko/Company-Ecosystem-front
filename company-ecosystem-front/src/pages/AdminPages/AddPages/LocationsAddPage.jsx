import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";

const LocationsAddPage = () => {
    const location = useLocation()
    //const [locations, setLocations] = useState([{}]);
    const itemName = "location"
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','photo','actions']


    async function updateLocations(inputItems){
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

export default LocationsAddPage;