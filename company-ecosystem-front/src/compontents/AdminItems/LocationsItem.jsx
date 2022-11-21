import React from 'react';
import s from './AdminItem.module.css'
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import {Link} from "react-router-dom";

const LocationsItem = ({arrayOfItems, flexValues, headerBlock }) => {

    return (

        <div className={s.adminItemContainer} style={{width: `${headerBlock}px`}}>
            <div className={s.content}>
                <ul className={s.ul}>
                    <li className={s.item} style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}>{arrayOfItems.title}</li>
                    <li className={s.item} style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}>{arrayOfItems.title}</li>
                    <li className={s.item} style={flexValues.chiefEmail != null ? {flex: flexValues.chiefEmail} : {flex: flexValues.general}}>{arrayOfItems.chiefEmail}</li>
                    <li className={s.item} style={flexValues.workingStart != null ? {flex: flexValues.workingStart} : {flex: flexValues.general}}>{arrayOfItems.workingStart}</li>
                    <li className={s.item} style={flexValues.workingEnd != null ? {flex: flexValues.workingEnd} : {flex: flexValues.general}}>{arrayOfItems.workingEnd}</li>
                    <Link to='/dfdsf'><li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li></Link>
                    <li className={s.item}><img src={Delete} alt="Delete"/></li>

                </ul>

            </div>
        </div>
    );
};

export default LocationsItem;