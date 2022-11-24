import { LOCATIONS_EDIT_ROUTE, LOCATIONS_ADD_ROUTE } from '../../utils/consts';
import React, {useEffect, useState} from 'react';
import s from './AdminItem.module.css'
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import {Link, useLocation} from "react-router-dom";
import InputAdmin from "../UI/input/InputAdmin";

const LocationsItem = ({arrayOfItems, flexValues, headerBlock }) => {

    const location = useLocation()
    const [isEditItem, setIsEditItem] = useState(false)
    const [isAddItem, setIsAddItem] = useState(false)
    const [toggleArray, setToggleArray] = useState([])
    const [newItems, setNewItems] = useState(arrayOfItems);

    const setToggleValues = () => {

        let array = [{}]
        for (let item in arrayOfItems) {
            array.push({itemName: item, isToggle: true})
        }
        setToggleArray(array)
        
    }

    useEffect(() => {

        setToggleValues()
    }, [])

    useEffect(() => {
        checkIsChangeItem()
    }, [location.pathname])

    const checkIsChangeItem = () => {
        if (location.pathname === LOCATIONS_EDIT_ROUTE) {
            setIsEditItem(true)
        } else if (location.pathname === LOCATIONS_ADD_ROUTE) {
            setIsAddItem(true)
        } else {
            setIsEditItem(false)
            setIsAddItem(false)
        }
    }

    const changeArrayItems = (item) => {
        let array = []
        toggleArray.map(obj => {
            if(obj.itemName === item) {
                array.push({itemName: obj.itemName, isToggle: false})
            } else {
                array.push(obj)
            }
        })
        setToggleArray(array)
    }

    function getIsToggleFromToggleArray(elem){
        for(let i = 0; i < toggleArray.length; i++){
            if(toggleArray[i].itemName === elem && toggleArray[i].isToggle === false){
                return true;
            }
        }
        return false;
    }

    return (

        <div className={s.adminItemContainer} style={{width: `${headerBlock}px`}}>
            <div className={s.content}>
                <ul className={s.ul}>
                {(() => {
                    if (isEditItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('id')}>
                                    { !getIsToggleFromToggleArray('id') ? arrayOfItems.id
                                    : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('title')}>
                                    { !getIsToggleFromToggleArray('title') ? arrayOfItems.title
                                    : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.chiefEmail != null ? {flex: flexValues.chiefEmail} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('chiefEmail')}>
                                    { !getIsToggleFromToggleArray('chiefEmail') ? arrayOfItems.chiefEmail
                                    : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.workingStart != null ? {flex: flexValues.workingStart} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('workingStart')}>
                                    { !getIsToggleFromToggleArray('workingStart') ? arrayOfItems.workingStart
                                    : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.workingEnd != null ? {flex: flexValues.workingEnd} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('workingEnd')}>
                                    { !getIsToggleFromToggleArray('workingEnd') ? arrayOfItems.workingEnd
                                    : <InputAdmin/>
                                    }
                                </li>
                                <Link to={LOCATIONS_EDIT_ROUTE}
                                      state={{
                                          arrayOfSelectedItem: arrayOfItems,
                                          flexValues: flexValues,
                                          headerBlock: headerBlock
                                      }}>
                                    <li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={s.item}><img src={Delete} alt="Delete"/></li>
                            </ul>)

                    } else if (isAddItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                                <li className={s.item}
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}>{arrayOfItems.title}</li>
                                <li className={s.item}
                                    style={flexValues.chiefEmail != null ? {flex: flexValues.chiefEmail} : {flex: flexValues.general}}>{arrayOfItems.chiefEmail}</li>
                                <li className={s.item}
                                    style={flexValues.workingStart != null ? {flex: flexValues.workingStart} : {flex: flexValues.general}}>{arrayOfItems.workingStart}</li>
                                <li className={s.item}
                                    style={flexValues.workingEnd != null ? {flex: flexValues.workingEnd} : {flex: flexValues.general}}>{arrayOfItems.workingEnd}</li>
                                <Link to={LOCATIONS_EDIT_ROUTE} state={{
                                    arrayOfSelectedItem: arrayOfItems,
                                    flexValues: flexValues,
                                    headerBlock: headerBlock
                                }}>
                                    <li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={s.item}><img src={Delete} alt="Delete"/></li>
                            </ul>
                        )

                    } else {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                                <li className={s.item}
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}>{arrayOfItems.title}</li>
                                <li className={s.item}
                                    style={flexValues.chiefEmail != null ? {flex: flexValues.chiefEmail} : {flex: flexValues.general}}>{arrayOfItems.chiefEmail}</li>
                                <li className={s.item}
                                    style={flexValues.workingStart != null ? {flex: flexValues.workingStart} : {flex: flexValues.general}}>{arrayOfItems.workingStart}</li>
                                    <li className={s.item}
                                    style={flexValues.workingEnd != null ? {flex: flexValues.workingEnd} : {flex: flexValues.general}}>{arrayOfItems.workingEnd}</li>
                                <Link to={LOCATIONS_EDIT_ROUTE} state={{
                                    arrayOfSelectedItem: arrayOfItems,
                                    flexValues: flexValues,
                                    headerBlock: headerBlock
                                }}>
                                    <li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={s.item}><img src={Delete} alt="Delete"/></li>
                            </ul>
                        )
                    }
                })()}
                </ul>

            </div>
        </div>
    );
};

export default LocationsItem;


// <ul className={s.ul}>
//                     <li className={s.item} style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
//                     <li className={s.item} style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}>{arrayOfItems.title}</li>
//                     <li className={s.item} style={flexValues.chiefEmail != null ? {flex: flexValues.chiefEmail} : {flex: flexValues.general}}>{arrayOfItems.chiefEmail}</li>
//                     <li className={s.item} style={flexValues.workingStart != null ? {flex: flexValues.workingStart} : {flex: flexValues.general}}>{arrayOfItems.workingStart}</li>
//                     <li className={s.item} style={flexValues.workingEnd != null ? {flex: flexValues.workingEnd} : {flex: flexValues.general}}>{arrayOfItems.workingEnd}</li>
//                     <Link to='/dfdsf'><li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li></Link>
//                     <li className={s.item}><img src={Delete} alt="Delete"/></li>

//                 </ul>