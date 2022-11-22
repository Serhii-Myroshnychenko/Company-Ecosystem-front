import React, {useEffect, useState} from 'react';
import s from './AdminItem.module.css'
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import {Link, useLocation} from "react-router-dom";
import {EMPLOYERS_ADD_ROUTE, EMPLOYERS_EDIT_ROUTE} from "../../utils/consts";
import EmployeesEditPage from "../../pages/AdminPages/EditPages/EmployeesEditPage";
import {itemEditSelector} from "../../utils/selectors";
import InputAdmin from "../UI/input/InputAdmin";

const EmployeesItem = ({arrayOfItems, flexValues, headerBlock}) => {

    const location = useLocation()
    const [isEditItem, setIsEditItem] = useState(false)
    const [isAddItem, setIsAddItem] = useState(false)
    const [toggle, setToggle] = useState()
    const [toggleArray, setToggleArray] = useState([{}])
    //const toggleArray = [{}]  // itemName: email, isToggle: true
    const [newItems, setNewItems] = useState(arrayOfItems);

    const setToggleValues = () => {
        /*💩💩💩💩💩💩💩💩💩💩*/
        /*for (let item in arrayOfItems) {
            toggleArray.push({itemName: item, isToggle: true})
        }*/
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
        let array = [{}]
        toggleArray.map(obj => {
            if(obj.itemName === item) {
                array.push({itemName: obj.itemName, isToggle: false})
                console.log(toggleArray[0].isToggle)
            } else {
                array.push(obj)
            }
        })
        setToggleArray(array)
    }
    console.log(toggleArray)

    function toggleInput() {
        setToggle(false);
    }

    /*function handleChange(event) {
        setText(event.target.value);
    }
*/

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
                                    { toggleArray[0].isToggle === false ? arrayOfItems.id
                                    : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}
                                    onDoubleClick={toggleInput}>
                                    {toggle ? arrayOfItems.email
                                        : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}
                                    onDoubleClick={toggleInput}>
                                    {toggle ? arrayOfItems.role
                                        : <InputAdmin/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}
                                    onDoubleClick={toggleInput}>
                                    {toggle ? arrayOfItems.position
                                        : <InputAdmin/>
                                    }
                                </li>
                                <Link to={EMPLOYERS_EDIT_ROUTE}
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
                                    style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                                <li className={s.item}
                                    style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}>{arrayOfItems.role}</li>
                                <li className={s.item}
                                    style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                                <Link to={EMPLOYERS_EDIT_ROUTE} state={{
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
                                    style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                                <li className={s.item}
                                    style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}>{arrayOfItems.role}</li>
                                <li className={s.item}
                                    style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                                <Link to={EMPLOYERS_EDIT_ROUTE} state={{
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
              {/*  <ul className={s.ul}>
                    <li className={s.item} style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                    <li className={s.item} style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                    <li className={s.item} style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}>{arrayOfItems.role}</li>
                    <li className={s.item} style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                    <Link to={EMPLOYERS_EDIT_ROUTE} state={{ arrayOfSelectedItem: arrayOfItems, flexValues: flexValues, headerBlock:headerBlock}}><li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li></Link>
                    <li className={s.item}><img src={Delete} alt="Delete"/></li>
                </ul>*/}

            </div>
        </div>
    );
};

export default EmployeesItem;