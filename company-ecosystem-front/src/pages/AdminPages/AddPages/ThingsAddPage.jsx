import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useTranslation} from "react-i18next";
const ThingsAddPage = () => {

    const location = useLocation()
    const {t} = useTranslation();
    const itemName = "thing"
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const headers = ['name', 'instruction','characteristic','photoes','locationId','actions']


    async function createThing(inputItems){
        let formData = new FormData();
        formData.append('name',inputItems.name);
        formData.append('instruction',inputItems.instruction);
        formData.append('characteristic',inputItems.characteristic);
        inputItems.photos.forEach(item => formData.append('images', item))
        formData.append('locationId',inputItems.locationId);
        formData.append('id',0);

        let result = await fetch("https://localhost:7032/Thing", {
            method: 'POST',
            body: formData
        });
        if(result.status == 200){
            alert(t("Alert.success"))
        } else {
            alert(t("Alert.error"))
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={createThing} isAddPage={true}/>
            </div>
        </div>
    );
};

export default ThingsAddPage;