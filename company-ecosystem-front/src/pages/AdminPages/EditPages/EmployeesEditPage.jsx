import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";


const EmployeesEditPage = (props) => {
    const location = useLocation()
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const [employees, setEmployees] = useState([{...arrayOfSelectedItem}]);
    const itemName = "employee"

    /*useEffect(() => {
        setEmployyesArray()
    },[]);

    const setEmployyesArray = () => setEmployees(arrayOfSelectedItem)*/

    //console.log(arrayOfSelectedItem)
        //console.log(employees)

   /* async function getEmployees(){
        let result = await fetch("https://localhost:7032/Account", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        });
        if(result.status === 200){
            setEmployees(await result.json())
        }
        else {
            alert("Произошла ошибка")
        }
    }*/

    const headers = ['id', 'email','role','position','actions']

    /*const flexValues = {
        id: '0 0 60px',
        email: '0 0 250px',
        general: '0 0 200px'
    }*/

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={employees} headersArray={headers} itemName={itemName}/>
            </div>
        </div>
    );
};

export default EmployeesEditPage;