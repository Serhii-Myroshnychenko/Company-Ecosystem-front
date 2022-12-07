import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useTranslation} from "react-i18next";

const LocationsAddPage = () => {
    const location = useLocation()
    const {t} = useTranslation();
    const itemName = "location"
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','photo','actions']


    async function createLocation(inputItems){

        let formData = new FormData();
        formData.append('title',inputItems.title);
        formData.append('chief',inputItems.chief);
        formData.append('workingStart',inputItems.workingStart);
        formData.append('workingEnd',inputItems.workingEnd);
        formData.append('photo',inputItems.photo)
        formData.append('id',0);

        let result = await fetch("https://localhost:7032/Location", {
            method: 'POST',
            body: formData
        });
        if(result.status == 200){
            alert(t("Alert.success"))
        } else {
            alert(t("Alert.success"))
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={createLocation} isAddPage={true}/>
            </div>
        </div>
    );
};

export default LocationsAddPage;