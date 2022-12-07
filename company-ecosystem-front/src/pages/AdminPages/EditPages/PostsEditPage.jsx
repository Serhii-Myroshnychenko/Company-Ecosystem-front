import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const PostsEditPage = (props) => {
    
    const location = useLocation()
    const {t} = useTranslation();
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const itemName = "post"
    const headers = ['title', 'body','locationId','actions']

    async function updatePosts(inputItems){
        let formData = new FormData();
        formData.append('title',inputItems.title);
        formData.append('body',inputItems.body);
        formData.append('locationId',inputItems.locationId);
        formData.append('id',inputItems.id);

        let result = await fetch("https://localhost:7032/Post", {
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
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={updatePosts} isAddPage={true}/>
            </div>
        </div>
    );
};

export default PostsEditPage;