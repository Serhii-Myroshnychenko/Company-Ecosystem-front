import React, {useEffect, useState} from 'react';
import s from './AdminHeader.module.css'

const AdminHeaderText = ({headers, arrayOfItems, flexValues}) => {

    function fillArrayOfFlexValues() {
        const flexValuesArray = []
        for(let item in flexValues) {
            flexValuesArray.push(item)
        }
        return flexValuesArray;
    }

    const flexValuesArray = fillArrayOfFlexValues()

    return (
        <div className={s.adminHeaderText}>
            {
                headers.map(header => {
                    for (let i = 0; i < headers.length; i++) {
                        if (flexValuesArray.includes(header)) {
                            return <div style={{flex: flexValues[`${header}`]}}>{header}</div>
                        } else {
                            return <div style={{flex: flexValues.general}}>{header}</div>
                        }
                    }
                })
            }
        </div>
    );
};

export default AdminHeaderText;

/*
headers.map(header => {
    for (let i = 0; i < headers.length; i++) {
        if (headers[i] === Object.keys(...arrayOfItems)[i] && header === flexValuesArray[i]) {
            return <div style={{flex: flexValues[`${header}`]}}>{header}</div>
        } else {
            return <div style={{flex: flexValues.general}}>{header}</div>
        }
    }
})*/
