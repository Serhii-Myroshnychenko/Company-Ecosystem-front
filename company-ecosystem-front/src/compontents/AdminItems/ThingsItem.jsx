import {THINGS_ROUTE,THINGS_ADD_ROUTE,THINGS_EDIT_ROUTE} from '../../utils/consts';
import noPhotoImage from "../../img/icons/noPhotoImage.png";
import React, {useEffect, useRef, useState} from 'react';
import s from './AdminItem.module.css'
import DeleteRequest from '../../requests/requests';
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import Save from "../../img/icons/Save.png"
import {Link, useLocation} from "react-router-dom";
import InputAdmin from "../UI/input/InputAdmin";
import {useTranslation} from "react-i18next";


const ThingsItem = ({arrayOfItems , flexValues, headerBlock, updateTable,itemName}) => {

    const location = useLocation()
    const {t} = useTranslation();
    const [isEditItem, setIsEditItem] = useState(false)
    const [isAddItem, setIsAddItem] = useState(false)
    const [toggleArray, setToggleArray] = useState([])
    const [newArrayOfItems, setNewArrayOfItems] = useState({name: arrayOfItems.name, instruction: arrayOfItems.instruction, characteristic: arrayOfItems.characteristic, locationId:arrayOfItems.locationId,photos: arrayOfItems.photos, id: arrayOfItems.id, path:arrayOfItems.photos});

    useEffect(() => {
        setToggleValues()
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
        if (location.pathname === THINGS_EDIT_ROUTE) {
            setIsEditItem(true)
            setIsAddItem(false)
        } else if (location.pathname === THINGS_ADD_ROUTE) {
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

    return (
        <div className={s.adminItemContainer} style={{width: `${headerBlock}px`}}>
            <div className={s.content}>
                <ul className={s.ul} >
                {(() => {
                    if (isEditItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.name != null ? {flex: flexValues.name} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('name')}>
                                    { !getIsToggleFromToggleArray('name') ? arrayOfItems.name
                                    : <InputAdmin value={newArrayOfItems.name} onChange={e => setNewArrayOfItems({...newArrayOfItems, name: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.instruction != null ? {flex: flexValues.instruction} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('instruction')}>
                                    { !getIsToggleFromToggleArray('instruction') ? arrayOfItems.instruction
                                    : <InputAdmin value={newArrayOfItems.instruction} onChange={e => setNewArrayOfItems({...newArrayOfItems, instruction: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.characteristic != null ? {flex: flexValues.characteristic} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('characteristic')}>
                                    { !getIsToggleFromToggleArray('characteristic') ? arrayOfItems.characteristic
                                    : <InputAdmin value={newArrayOfItems.characteristic} onChange={e => setNewArrayOfItems({...newArrayOfItems, characteristic: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                        style={flexValues.photos != null ? {flex: flexValues.photos} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('photos')}>
                                        { !getIsToggleFromToggleArray('photos') ?
                                        <div className={s.photoContainerThings}>
                                                {arrayOfItems.photos?.map(p => {
                                                return (
                                                <div className={s.photoContainer}>
                                                    <img src={p.path !== undefined ? 'https://localhost:7032' + p.path : noPhotoImage} alt="photo"/>
                                                </div>
                                                )})}
                                        </div>
                                            : <input type="file" multiple onChange={e => setNewArrayOfItems({...newArrayOfItems, photos: [...e.target.files]})}/>
                                        }
                                </li>
                                <Link to={THINGS_ROUTE}
                                      state={{
                                          arrayOfSelectedItem: arrayOfItems,
                                          flexValues: flexValues,
                                          headerBlock: headerBlock
                                      }} onClick={() => updateTable(newArrayOfItems)}>
                                    <li className={`${s.item} ${s.editButton} ${s.saveButton}`}><img src={Save} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <Link to={THINGS_ROUTE}>
                                    <li className={`${s.item} ${s.deleteButton}`}><img src={Delete} alt="Delete"/></li>
                                </Link>
                            </ul>)
                    } else if (isAddItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.name != null ? {flex: flexValues.name} : {flex: flexValues.general}}>
                                    <InputAdmin value={newArrayOfItems.name || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, name: e.target.value})}/>
                                </li>
                                <li className={s.item}
                                    style={flexValues.instruction != null ? {flex: flexValues.instruction} : {flex: flexValues.general}}>
                                    <InputAdmin value={newArrayOfItems.instruction || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, instruction: e.target.value})}/>
                                </li>
                                <li className={s.item}
                                    style={flexValues.characteristic != null ? {flex: flexValues.characteristic} : {flex: flexValues.general}}>
                                    <InputAdmin  value={newArrayOfItems.characteristic || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, characteristic: e.target.value})}/>
                                </li>
                                <li className={s.item}
                                    style={flexValues.photos != null ? {flex: flexValues.photos} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('photos')}>
                                        {
                                            
                                          <input type="file" multiple onChange={e => setNewArrayOfItems({...newArrayOfItems, photos: [...e.target.files]})}/>
         
                                        }
                                </li>
                                <li className={s.item}
                                    style={flexValues.locationId != null ? {flex: flexValues.locationId} : {flex: flexValues.general}}>
                                    <InputAdmin  value={newArrayOfItems.locationId || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, locationId: Number(e.target.value)})}/>
                                </li>
                                
                                <Link to={THINGS_ROUTE}  state={{
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
                                    style={flexValues.name != null ? {flex: flexValues.name} : {flex: flexValues.general}}>{arrayOfItems.name}</li>
                                <li className={s.item}
                                    style={flexValues.instruction != null ? {flex: flexValues.instruction} : {flex: flexValues.general}}>{arrayOfItems.instruction}</li>
                                <li className={s.item}
                                    style={flexValues.characteristic != null ? {flex: flexValues.characteristic} : {flex: flexValues.general}}>{arrayOfItems.characteristic}</li>
                                <li className={s.item}
                                    style={flexValues.photos != null ? {flex: flexValues.photos} : {flex: flexValues.general}}>
                                    <div className={s.photoContainerThings}>
                                            {arrayOfItems.photos?.map(p => {
                                                return (
                                                    <div className={s.photoContainer}>
                                                        <img src={p.path !== undefined ? 'https://localhost:7032' + p.path : noPhotoImage} alt="photo"/>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </li>
                                <Link to={THINGS_EDIT_ROUTE} state={{
                                    arrayOfSelectedItem: arrayOfItems,
                                    flexValues: flexValues,
                                    headerBlock: headerBlock
                                }}>
                                    <li className={`${s.item}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <li className={`${s.item} ${s.deleteButton}`}><img src={Delete} alt="Delete" onClick={() => DeleteRequest(itemName,arrayOfItems.id,t)}/></li>
                            </ul>
                        )
                    }
                })()}
                </ul>

            </div>
        </div>
    );
};

export default ThingsItem;
