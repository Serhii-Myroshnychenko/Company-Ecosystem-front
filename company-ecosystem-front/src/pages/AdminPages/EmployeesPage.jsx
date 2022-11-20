import React from 'react';
import s from './styles/AdminPages.module.css'
import AdminBlock from "../../compontents/AdminBlock";

const EmployeesPage = () => {

    const employItemsTest = [
        {
            id: 2,
            email: 'ivanivfdf.gmail.com',
            password: 'ivanpassdfssdfsdfsdfsdfsdfsdfsdf',
            role: 'role1',
            position: 'position1',
            item: 'item1',
            locationId: 'locationId1',
            place: 'place1'
        },
        {
            id: 3,
            email: 'krol',
            password: 'krolpasivanpassdfssdfsdfsdf',
            role: 'role2',
            position: 'position2',
            item: 'item2',
            locationId: 'locationId2',
            place: 'place2'
        },
        {
            id: 3,
            email: 'ivan',
            password: 'ivanpas',
            role: 'role1',
            position: 'position1',
            item: 'item1',
            locationId: 'locationId1',
            place: 'place1asdasdasdasdasdasdasdasdadassdfsdfsdfsdfsdf'
        },
    ]

    const headers = ['id', 'email','password','role','position','item','locationId', 'place','actions']

    const flexValues = {
        id: '0 0 60px',
        email: '0 0 250px',
        general: '0 0 200px'
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={employItemsTest} headersArray={headers}/>
            </div>
        </div>
    );
};

export default EmployeesPage;