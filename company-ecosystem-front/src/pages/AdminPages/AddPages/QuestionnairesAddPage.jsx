import React from 'react';
import {useLocation} from "react-router-dom";
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useTranslation} from "react-i18next";

const QuestionnairesAddPage = () => {

    const location = useLocation()
    const {t} = useTranslation();
    const itemName = "questionnaire"
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const headers = ['firstName', 'middleName','lastName','phone','birthday','photo','aboutMyself','linkToLinkedIn','employeeId', 'actions']


    async function createQuestionnaires(inputItems){

        let formData = new FormData();
        formData.append('firstName',inputItems.firstName);
        formData.append('middleName',inputItems.middleName);
        formData.append('lastName',inputItems.lastName);
        formData.append('phone',inputItems.phone);
        formData.append('birthday',inputItems.birthday);
        formData.append('photo',inputItems.photo)
        formData.append('aboutMyself',inputItems.aboutMyself)
        formData.append('linkToLinkedIn',inputItems.linkToLinkedIn)
        formData.append('employeeId',inputItems.employeeId)
        formData.append('id',0);

        let result = await fetch("https://localhost:7032/Questionnaire", {
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
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={createQuestionnaires} isAddPage={true}/>
            </div>
        </div>
    );
};

export default QuestionnairesAddPage;