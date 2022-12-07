import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const LocationsEditPage = (props) => {

    const location = useLocation()
    const {t} = useTranslation();
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const itemName = "location"
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','photo','actions']

    async function updateLocations(inputItems){

        let formData = new FormData();
        formData.append('title',inputItems.title);
        formData.append('chief',inputItems.chief);
        formData.append('workingStart',inputItems.workingStart);
        formData.append('workingEnd',inputItems.workingEnd);
        if(inputItems.photo.name === undefined){
            formData.append('photo',null);
            formData.append('path',inputItems.photo)

        } else {
            formData.append('photo',inputItems.photo);
            formData.append('path',inputItems.path)
        }
        formData.append('id',inputItems.id);

        let result = await fetch("https://localhost:7032/Location", {
            method: 'PUT',
            body: formData
        });
        if(result.status === 200){
            alert(t("Alert.success"))
        } else {
            alert(t("Alert.error"))
        }
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