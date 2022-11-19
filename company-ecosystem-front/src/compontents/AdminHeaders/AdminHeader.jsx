import React, {useEffect, useState} from 'react';
import s from "./AdminHeader.module.css";
import AdminHeaderText from "./AdminHeaderText";

const AdminHeader = ({headers, arrayOfItems, flexValues}) => {

    return (
        <div className={s.headerBlock}>
            <div className={s.headersContainer}>
                <AdminHeaderText headers={headers} arrayOfItems={arrayOfItems} flexValues={flexValues}/>
            </div>
        </div>
    );
};

export default AdminHeader;