import React, {useEffect, useState} from 'react';
import s from './AdminItem.module.css'
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import {Link, useLocation} from "react-router-dom";
import {EMPLOYERS_ADD_ROUTE, EMPLOYERS_EDIT_ROUTE} from "../../utils/consts";
import InputAdmin from "../UI/input/InputAdmin";

const EmployeesItem = ({arrayOfItems, flexValues, headerBlock, updateTable}) => {

    const location = useLocation()
    const [isEditItem, setIsEditItem] = useState(false)
    const [isAddItem, setIsAddItem] = useState(false)
    const [toggleArray, setToggleArray] = useState([])
    const [newArrayOfItems, setNewArrayOfItems] = useState({id: arrayOfItems.id, title2: arrayOfItems.title2, chief2: 2, workingStart: arrayOfItems.workingStart, workingEnd:arrayOfItems.workingEnd});

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
        if (location.pathname === EMPLOYERS_EDIT_ROUTE) {
            setIsEditItem(true)
        } else if (location.pathname === EMPLOYERS_ADD_ROUTE) {
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
                {(() => {
                    if (isEditItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('id')}>
                                    { !getIsToggleFromToggleArray('id') ? arrayOfItems.id
                                    : <InputAdmin value={newArrayOfItems.id} onChange={e => setNewArrayOfItems({...newArrayOfItems, id: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('email')}>
                                    { !getIsToggleFromToggleArray('email') ? arrayOfItems.email
                                    : <InputAdmin value={newArrayOfItems.title} onChange={e => setNewArrayOfItems({...newArrayOfItems, title: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('role')}>
                                    { !getIsToggleFromToggleArray('role') ? arrayOfItems.role
                                    : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('position')}>
                                    { !getIsToggleFromToggleArray('position') ? arrayOfItems.position
                                    : <InputAdmin/>
                                    }
                                </li>
                                {/*<Link to={EMPLOYERS_EDIT_ROUTE}
                                      state={{
                                          arrayOfSelectedItem: arrayOfItems,
                                          flexValues: flexValues,
                                          headerBlock: headerBlock
                                      }} onClick={() => updateTable(newArrayOfItems)}>
                                    <li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <li className={s.item}><img src={Delete} alt="Delete"/></li>*/}
                            </ul>)

                    } else if (isAddItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                                <li className={s.item}
                                    style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                                <li className={s.item}
                                    style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}>{arrayOfItems.role}</li>
                                <li className={s.item}
                                    style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                              {/*  <Link to={EMPLOYERS_EDIT_ROUTE} state={{
                                    arrayOfSelectedItem: arrayOfItems,
                                    flexValues: flexValues,
                                    headerBlock: headerBlock
                                }} onClick={() => updateTable(newArrayOfItems)}>
                                    <li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <li className={s.item}><img src={Delete} alt="Delete"/></li>*/}
                            </ul>
                        )

                    } else {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                                <li className={s.item}
                                    style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                                <li className={s.item}
                                    style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}>{arrayOfItems.role}</li>
                                <li className={s.item}
                                    style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                              {/*  <Link to={EMPLOYERS_EDIT_ROUTE} state={{
                                    arrayOfSelectedItem: arrayOfItems,
                                    flexValues: flexValues,
                                    headerBlock: headerBlock
                                }}>
                                    <li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <li className={s.item}><img src={Delete} alt="Delete"/></li>*/}
                            </ul>
                        )
                    }
                })()}
            </div>
        </div>
    );
};

export default EmployeesItem;