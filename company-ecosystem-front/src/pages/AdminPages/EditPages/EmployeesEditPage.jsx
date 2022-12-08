import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";



const EmployeesEditPage = (props) => {

    const location = useLocation()
    const {t} = useTranslation();
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const itemName = "employee"
    const headers = ['id', 'email','role','position','actions']

    async function updateEmployees(inputItems){
        let result = await fetch("https://localhost:7032/Employees", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({id: inputItems.id, title2: inputItems.title2, chief2: inputItems.chief2, workingStart: inputItems.workingStart, workingEnd:inputItems.workingEnd}),
        });
        if(result.status == 200){
            alert(t("Alert.success"))
        } else{
            alert(t("Alert.error"))
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={updateEmployees}/>
            </div>
        </div>
    );
};

export default EmployeesEditPage;