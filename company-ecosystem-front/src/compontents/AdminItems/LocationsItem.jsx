import {LOCATIONS_EDIT_ROUTE, LOCATIONS_ADD_ROUTE, LOCATIONS_ROUTE} from '../../utils/consts';
import React, {useEffect, useRef, useState} from 'react';
import s from './AdminItem.module.css'
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import Save from "../../img/icons/Save.png"
import noPhotoImage from "../../img/icons/noPhotoImage.png"
import DeleteRequest from '../../requests/requests';
import {Link, useLocation} from "react-router-dom";
import InputAdmin from "../UI/input/InputAdmin";
import {useTranslation} from "react-i18next";

const LocationsItem = ({arrayOfItems , flexValues, headerBlock, updateTable, itemName}) => {

    const location = useLocation()
    const {t} = useTranslation();
    const [isEditItem, setIsEditItem] = useState(false)
    const [isAddItem, setIsAddItem] = useState(false)
    const [toggleArray, setToggleArray] = useState([])
    const [employeeId, setEmployeeId] = useState()
    const [newArrayOfItems, setNewArrayOfItems] = useState({id: arrayOfItems.id, title: arrayOfItems.title, chief: employeeId, workingStart: arrayOfItems.workingStart, workingEnd:arrayOfItems.workingEnd, photo: arrayOfItems.photo, path: arrayOfItems.photo});

    const validArrayOfItems = {
        get filledArrayOfItems() {
            if(Object.keys(arrayOfItems).length === 0) {
                return arrayOfItems = {employees: [{email: 'empty'}]}
            } else {
                return arrayOfItems
            }
        }
    }

    useEffect(() => {
        setNewArrayOfItems({...newArrayOfItems, chief: employeeId})
    }, [employeeId])

    useEffect(() => {
        setToggleValues()
        setEmployeeId(getEmployeeIdWithFilledArrayOfItems())
    }, [])

    useEffect(() => {
        checkIsChangeItem()
    }, [location.pathname])


    const setToggleValues = () => {
        let array = [{}]
        for (let item in arrayOfItems) {
            array.push({itemName: item, isToggle: true})
        }
        setToggleArray(array)
    }

    const checkIsChangeItem = () => {
        if (location.pathname === LOCATIONS_EDIT_ROUTE) {
            setIsEditItem(true)
            setIsAddItem(false)
        } else if (location.pathname === LOCATIONS_ADD_ROUTE) {
            setIsAddItem(true)
            setIsEditItem(false)
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

    const getEmployeeIdWithFilledArrayOfItems = () => {
        for (let emp of validArrayOfItems.filledArrayOfItems.employees) {
            if (emp.email === arrayOfItems.chiefEmail) {
                return emp.id
            } else {
                return 0
            }
        }
    }

    return (
        <div className={s.adminItemContainer} style={{width: `${headerBlock}px`}}>
            <div className={s.content}>
                <ul className={s.ul} >
                {(() => {
                    if (isEditItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('id')}>
                                    { !getIsToggleFromToggleArray('id') ? arrayOfItems.id
                                    : <InputAdmin value={newArrayOfItems.id} onChange={e => setNewArrayOfItems({...newArrayOfItems, id: Number(e.target.value)})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('title')}>
                                    { !getIsToggleFromToggleArray('title') ? arrayOfItems.title
                                    : <InputAdmin value={newArrayOfItems.title} onChange={e => setNewArrayOfItems({...newArrayOfItems, title: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.chiefEmail != null ? {flex: flexValues.chiefEmail} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('chiefEmail')}>
                                    { !getIsToggleFromToggleArray('chiefEmail') ? employeeId
                                    : <InputAdmin value={newArrayOfItems.chief} onChange={e => setNewArrayOfItems({...newArrayOfItems, chief: Number(e.target.value)})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.workingStart != null ? {flex: flexValues.workingStart} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('workingStart')}>
                                    { !getIsToggleFromToggleArray('workingStart') ? arrayOfItems.workingStart
                                    : <InputAdmin type="date" value={newArrayOfItems.workingStart} onChange={e => setNewArrayOfItems({...newArrayOfItems, workingStart: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.workingEnd != null ? {flex: flexValues.workingEnd} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('workingEnd')}>
                                    { !getIsToggleFromToggleArray('workingEnd') ? arrayOfItems.workingEnd
                                    : <InputAdmin type="date" value={newArrayOfItems.workingEnd} onChange={e => setNewArrayOfItems({...newArrayOfItems, workingEnd: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.photo != null ? {flex: flexValues.photo} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('photo')}>
                                    { !getIsToggleFromToggleArray('photo') ?
                                        <div className={s.photoContainer}>

                                            <img src={arrayOfItems.photo !== undefined ? 'https://localhost:7032' + arrayOfItems.photo : noPhotoImage} alt="photo"/>
                                        </div>
                                        : <input type="file" onChange={e => setNewArrayOfItems({...newArrayOfItems, photo: e.target.files[0]})}/>
                                    }
                                </li>
                                <Link to={LOCATIONS_ROUTE}
                                      state={{
                                          arrayOfSelectedItem: arrayOfItems,
                                          flexValues: flexValues,
                                          headerBlock: headerBlock
                                      }} onClick={() => updateTable(newArrayOfItems)}>
                                    <li className={`${s.item} ${s.editButton} ${s.saveButton}`}><img src={Save} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <Link to={LOCATIONS_ROUTE}>
                                    <li className={`${s.item} ${s.deleteButton}`}><img src={Delete} alt="Delete"/></li>
                                </Link>
                            </ul>)

                    } else if (isAddItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}><InputAdmin value={newArrayOfItems.id || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, id: Number(e.target.value)})}/></li>
                                <li className={s.item}
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}><InputAdmin value={newArrayOfItems.title || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, title: e.target.value})}/></li>
                                <li className={s.item}
                                    style={flexValues.chiefEmail != null ? {flex: flexValues.chiefEmail} : {flex: flexValues.general}}><InputAdmin value={newArrayOfItems.chief || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, chief: Number(e.target.value)})}/></li>
                                <li className={s.item}
                                    style={flexValues.workingStart != null ? {flex: flexValues.workingStart} : {flex: flexValues.general}}><InputAdmin type="date" value={newArrayOfItems.workingStart || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, workingStart: e.target.value})}/></li>
                                <li className={s.item}
                                    style={flexValues.workingEnd != null ? {flex: flexValues.workingEnd} : {flex: flexValues.general}}><InputAdmin type="date" value={newArrayOfItems.workingEnd || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, workingEnd: e.target.value})}/></li>
                                <li className={s.item}
                                    style={flexValues.photo != null ? {flex: flexValues.photo} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('photo')}>
                                    {
                                        arrayOfItems.photo === undefined ?
                                            <input type="file" onChange={e => setNewArrayOfItems({...newArrayOfItems, photo: e.target.files[0]})}/>
                                            :
                                            <div className={s.photoContainer}>
                                                <img src={arrayOfItems.photo !== undefined ? 'https://localhost:7032' + arrayOfItems.photo : noPhotoImage} alt="photo"/>
                                            </div>
                                    }
                                </li>

                                <Link to={LOCATIONS_ROUTE}  state={{
                                    arrayOfSelectedItem: arrayOfItems,
                                    flexValues: flexValues,
                                    headerBlock: headerBlock
                                }} onClick={() => updateTable(newArrayOfItems)}>
                                    <li className={`${s.item} ${s.editButton} ${s.saveButton}`}><img src={Save} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <li className={`${s.item} ${s.deleteButton}`}><img src={Delete} alt="Delete"/></li>
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
                                <li className={s.item}
                                    style={flexValues.photo != null ? {flex: flexValues.photo} : {flex: flexValues.general}}>
                                    <div className={s.photoContainer}>
                                        <img src={arrayOfItems.photo !== undefined ? 'https://localhost:7032' + arrayOfItems.photo : noPhotoImage} alt="photo"/>
                                    </div>
                                </li>
                                <Link to={LOCATIONS_EDIT_ROUTE} state={{
                                    arrayOfSelectedItem: arrayOfItems,
                                    flexValues: flexValues,
                                    headerBlock: headerBlock
                                }}>
                                    <li className={`${s.item}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <li className={`${s.item} ${s.deleteButton}`}><img src={Delete} alt="Delete" onClick={() => DeleteRequest(itemName,arrayOfItems.id)}/></li>
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
