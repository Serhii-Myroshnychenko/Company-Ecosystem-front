import React, {useEffect, useState} from 'react';
import s from './styles/AdminBlock.module.css'
import EmployeesItem from "./AdminItems/EmployeesItem";
import AdminHeader from "./AdminHeaders/AdminHeader";
import login from "../pages/Login";

//Общая страница вместе с фоном
// Тут будем эту AdminBlock прокидывать в
// pages страницы(Emloyers и тд) и через пропсы принимать
// результаты фетчей на тех станицах, и на освнове данных через map
// отрисовывать тут все как надо
//То есть все будет тут, а на страницах чисто будем уже запрос делать и передавать в пропсы сюда
// а понимать как что отрисовывать можно через location.pathname

const AdminBlock = (props) => {

    const empoyItemsTest = [
        {
            id: 2,
            email: 'ivanivfdf.gmail.com',
            password: 'ivanpassdfssdfsdfsdf',
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
            place: 'place1'
        },
    ]

    const headers = ['id', 'email','password','role','position','item','locationId', 'place','actions']

    // Этот массив будет в страничке самой передаваться
    const flexValues = {
        id: '0 1 60px',
        email: '0 1 250px',
        general: '0 1 240px'
    }

    const getElementsOfArray = empoyItemsTest.map(el => el)


    return (
        <div className={s.adminBlockContainer}>
            <div className={s.adminBlockContent}>
                <input type="text" placeholder='search' className={s.search}/>
                <div className={s.mainBlock}>
                    <AdminHeader arrayOfItems={getElementsOfArray} headers={headers} flexValues={flexValues}/>
                    <div className={s.informationContainer}>
                        {empoyItemsTest.map(item => <EmployeesItem arrayOfItems={item} flexValues={flexValues}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBlock;



{/*<div className={s.adminBlockContainer}>
                        <div className={s.adminBlockContent}>
                            <input type="text" placeholder='search' className={s.search}/>
                            <div className={s.mainBlock}>
                                <div className={s.columns}>
                                    <div className={s.headerBlock}>
                                        <div className={s.headersContainer}>
                                            {headers.map(header => <span>{header}</span>)}
                                        </div>
                                    </div>
                                    <div className={s.informationContainer}>
                                        {empoyItemsTest.map(item => <EmployeesItem arrayOfItems={item} flexValues={flexValues}/>)}
                                    </div>
                                </div>
                    */}


{/*{doDynamicNumberOfColumns(
                        <div className={s.content}>
                        <div className={s.headersBlock}>
                            <div className={s.headersContainer}>
                                {headers.map(header => <span>{header}</span>)}
                            </div>
                        </div>
                        <div className={s.informationContainer}>
                            {empoyItemsTest.map(item => <EmployeesItem arrayOfItems={item}/>)}
                        </div>
                    </div>)
                    }*/}

{/*<div className={s.columns}>
                        <div className={s.headersBlock}>
                            <div className={s.headersContainer}>
                                {headers.map(header => <span>{header}</span>)}
                            </div>
                        </div>
                        <div className={s.informationContainer}>
                            {empoyItemsTest.map(item => <EmployeesItem arrayOfItems={item}/>)}
                        </div>
                    </div>*/}