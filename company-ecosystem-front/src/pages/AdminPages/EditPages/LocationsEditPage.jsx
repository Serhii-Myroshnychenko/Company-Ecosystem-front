import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";


const LocationsEditPage = (props) => {
    const location = useLocation()
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const [Locations, setLocations] = useState([{...arrayOfSelectedItem}]);
    const itemName = "location"
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','actions']


    async function updateLocations(){
        let result = await fetch("https://localhost:7032/Locations", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({id:LocationId,title: Title, chief: Chief, workingStart:WorkingStart,workingEnd:WorkingEnd}),
        });
        if(result.status == 200){
            alert("Успешно")
        }
        else{
            alert("Неверные данные")
        }
    }
    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={Locations} headersArray={headers} itemName={itemName}/>
            </div>
        </div>
    );
};

export default LocationsEditPage;