import React , {useState ,useEffect} from 'react';
import s from './styles/MainPages.module.css'
import AdminBlock from "../../../compontents/AdminBlock";
import {useTranslation} from "react-i18next";
const ThingsPage = () => {

    const [things, setThings] = useState([{}]);
    const {t} = useTranslation();
    const itemName = "thing"
    const headers = ['name', 'instruction','characteristic','photos','actions']
    const flexValues = {
        id: '0 0 200px',
        general: '0 0 200px',
        photos: '0 0 430px',
    }
    const searchedFieldName = 'name'

    useEffect(() => {
        getThings()
    },[]);

    async function getThings(){
        let result = await fetch("https://localhost:7032/Thing", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }); 
        if(result.status === 200){
            setThings(await result.json())
        } else {
            alert(t("Alert.error"))
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={things}
                            headersArray={headers} itemName={itemName}
                            searchedFieldName={searchedFieldName}/>
            </div>
        </div>
    );
};

export default ThingsPage;