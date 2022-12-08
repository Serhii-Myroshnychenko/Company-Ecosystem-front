import React, {useEffect, useState} from 'react';
import s from "./styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useTranslation} from "react-i18next";

const QuestionnairesPage = () => {
    const [questionnaires, setQuestionnaires] = useState([{}]);
    const {t} = useTranslation();
    const itemName = "questionnaire"
    const headers = ['firstName', 'middleName','lastName','phone','birthday','photo','aboutMyself','linkToLinkedIn','EmployeeId','id', 'actions']
    const flexValues = {
        general: '0 0 200px',
        photo: '0 0 350px'
    }
    const searchedFieldName = 'lastName'

    useEffect(() => {
        getQuestionnaires()
    },[]);

    async function getQuestionnaires(){
        let result = await fetch("https://localhost:7032/Questionnaire", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        });
        if(result.status === 200){
            setQuestionnaires(await result.json())
        } else {
            alert(t("Alert.error"))
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={questionnaires}
                            headersArray={headers} itemName={itemName}
                            searchedFieldName={searchedFieldName}/>
            </div>
        </div>
    );
};

export default QuestionnairesPage;