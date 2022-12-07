import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";



const ThingsEditPage = (props) => {
    const location = useLocation()
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const itemName = "thing"
    const headers = ['name', 'instruction','characteristic','photoes','actions']

    async function updateThings(inputItems){
        console.log(inputItems)
        let formData = new FormData();
        formData.append('name',inputItems.name);
        formData.append('instruction',inputItems.instruction);
        formData.append('characteristic',inputItems.characteristic);
        if(inputItems.photos[0].name === undefined){
            formData.append('images',null);
            inputItems.photos?.forEach(item => formData.append('paths', item.path))
        } else {
            inputItems.photos?.forEach(item => formData.append('images', item))
            inputItems.photos?.forEach(item => formData.append('paths', item.path))
        }
        formData.append('locationId',inputItems.locationId);
        formData.append('id',inputItems.id);
        console.log(inputItems)
        console.log(formData)
        let result = await fetch("https://localhost:7032/Thing", {
            method: 'PUT',
            body: formData
        });
        if(result.status === 200){
            alert("Успешно")
        } else {
            alert("Неверные данные")
        }
    }



    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={updateThings} isAddPage={true}/>
            </div>
        </div>
    );
};

export default ThingsEditPage;