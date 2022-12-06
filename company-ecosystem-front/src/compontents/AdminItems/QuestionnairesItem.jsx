import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import {
    LOCATIONS_ADD_ROUTE,
    LOCATIONS_EDIT_ROUTE,
    LOCATIONS_ROUTE, QUESTIONNAIRES_ADD_ROUTE,
    QUESTIONNAIRES_EDIT_ROUTE,
    QUESTIONNAIRES_ROUTE
} from "../../utils/consts";
import s from "./AdminItem.module.css";
import InputAdmin from "../UI/input/InputAdmin";
import noPhotoImage from "../../img/icons/noPhotoImage.png";
import Save from "../../img/icons/Save.png";
import Delete from "../../img/icons/Delete.svg";
import Edit from "../../img/icons/Edit.svg";

const QuestionnairesItem = ({arrayOfItems , flexValues, headerBlock, updateTable}) => {
    const location = useLocation()
    const [isEditItem, setIsEditItem] = useState(false)
    const [isAddItem, setIsAddItem] = useState(false)
    const [toggleArray, setToggleArray] = useState([])
    const [employeeId, setEmployeeId] = useState()
    const [newArrayOfItems, setNewArrayOfItems] = useState({firstName: arrayOfItems.firstName, middleName: arrayOfItems.middleName, lastName: arrayOfItems.lastName, phone: arrayOfItems.phone, birthday:arrayOfItems.birthday, photo: arrayOfItems.photo, aboutMyself: arrayOfItems.aboutMyself,  linkToLinkedIn: arrayOfItems.linkToLinkedIn, email: arrayOfItems.email, position: arrayOfItems.position, id: arrayOfItems.id, employeeId: employeeId});

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
        if (location.pathname === QUESTIONNAIRES_EDIT_ROUTE) {
            setIsEditItem(true)
            setIsAddItem(false)
        } else if (location.pathname === QUESTIONNAIRES_ADD_ROUTE) {
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
                                        style={flexValues.firstName != null ? {flex: flexValues.firstName} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('firstName')}>
                                        { !getIsToggleFromToggleArray('firstName') ? arrayOfItems.firstName
                                            : <InputAdmin value={newArrayOfItems.firstName} onChange={e => setNewArrayOfItems({...newArrayOfItems, firstName: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.middleName != null ? {flex: flexValues.middleName} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('middleName')}>
                                        { !getIsToggleFromToggleArray('middleName') ? arrayOfItems.middleName
                                            : <InputAdmin value={newArrayOfItems.middleName} onChange={e => setNewArrayOfItems({...newArrayOfItems, middleName: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.lastName != null ? {flex: flexValues.lastName} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('lastName')}>
                                        { !getIsToggleFromToggleArray('lastName') ? arrayOfItems.lastName
                                            : <InputAdmin value={newArrayOfItems.lastName} onChange={e => setNewArrayOfItems({...newArrayOfItems, lastName: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.phone != null ? {flex: flexValues.phone} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('phone')}>
                                        { !getIsToggleFromToggleArray('phone') ? arrayOfItems.phone
                                            : <InputAdmin value={newArrayOfItems.phone} onChange={e => setNewArrayOfItems({...newArrayOfItems, phone: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.birthday != null ? {flex: flexValues.birthday} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('birthday')}>
                                        { !getIsToggleFromToggleArray('birthday') ? arrayOfItems.birthday
                                            : <InputAdmin value={newArrayOfItems.birthday} onChange={e => setNewArrayOfItems({...newArrayOfItems, birthday: e.target.value})}/>
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
                                    <li className={s.item}
                                        style={flexValues.aboutMyself != null ? {flex: flexValues.aboutMyself} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('aboutMyself')}>
                                        { !getIsToggleFromToggleArray('aboutMyself') ? arrayOfItems.aboutMyself
                                            : <InputAdmin value={newArrayOfItems.aboutMyself} onChange={e => setNewArrayOfItems({...newArrayOfItems, aboutMyself: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.linkToLinkedIn != null ? {flex: flexValues.linkToLinkedIn} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('linkToLinkedIn')}>
                                        { !getIsToggleFromToggleArray('linkToLinkedIn') ? arrayOfItems.linkToLinkedIn
                                            : <InputAdmin value={newArrayOfItems.linkToLinkedIn} onChange={e => setNewArrayOfItems({...newArrayOfItems, linkToLinkedIn: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('email')}>
                                        { !getIsToggleFromToggleArray('email') ? arrayOfItems.email
                                            : <InputAdmin value={newArrayOfItems.email} onChange={e => setNewArrayOfItems({...newArrayOfItems, email: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('position')}>
                                        { !getIsToggleFromToggleArray('position') ? arrayOfItems.position
                                            : <InputAdmin value={newArrayOfItems.position} onChange={e => setNewArrayOfItems({...newArrayOfItems, position: e.target.value})}/>
                                        }
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}
                                        onDoubleClick={() => changeArrayItems('id')}>
                                        { !getIsToggleFromToggleArray('id') ? arrayOfItems.id
                                            : <InputAdmin value={newArrayOfItems.id} onChange={e => setNewArrayOfItems({...newArrayOfItems, id: e.target.value})}/>
                                        }
                                    </li>
                                    <Link to={QUESTIONNAIRES_ROUTE}
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
                                        style={flexValues.firstName != null ? {flex: flexValues.firstName} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.firstName || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, firstName: e.target.value})}/>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.middleName != null ? {flex: flexValues.middleName} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.middleName || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, middleName: e.target.value})}/>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.lastName != null ? {flex: flexValues.lastName} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.lastName || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, lastName: e.target.value})}/>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.phone != null ? {flex: flexValues.phone} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.phone || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, phone: e.target.value})}/>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.aboutMyself != null ? {flex: flexValues.aboutMyself} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.aboutMyself || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, aboutMyself: e.target.value})}/>
                                    </li>
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
                                    <li className={s.item}
                                        style={flexValues.linkToLinkedIn != null ? {flex: flexValues.linkToLinkedIn} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.linkToLinkedIn || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, linkToLinkedIn: e.target.value})}/>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.email || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, email: e.target.value})}/>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.position || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, position: e.target.value})}/>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>
                                        <InputAdmin value={newArrayOfItems.id || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, id: e.target.value})}/>
                                    </li>

                                    <Link to={QUESTIONNAIRES_ROUTE}  state={{
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
                                        style={flexValues.firstName != null ? {flex: flexValues.firstName} : {flex: flexValues.general}}>{arrayOfItems.firstName}</li>
                                    <li className={s.item}
                                        style={flexValues.middleName != null ? {flex: flexValues.middleName} : {flex: flexValues.general}}>{arrayOfItems.middleName}</li>
                                    <li className={s.item}
                                        style={flexValues.lastName != null ? {flex: flexValues.lastName} : {flex: flexValues.general}}>{arrayOfItems.lastName}</li>
                                    <li className={s.item}
                                        style={flexValues.phone != null ? {flex: flexValues.phone} : {flex: flexValues.general}}>{arrayOfItems.phone}</li>
                                    <li className={s.item}
                                        style={flexValues.birthday != null ? {flex: flexValues.birthday} : {flex: flexValues.general}}>{arrayOfItems.birthday}</li>
                                    <li className={s.item}
                                        style={flexValues.photo != null ? {flex: flexValues.photo} : {flex: flexValues.general}}>
                                        <div className={s.photoContainer}>
                                            <img src={arrayOfItems.photo !== undefined ? 'https://localhost:7032' + arrayOfItems.photo : noPhotoImage} alt="photo"/>
                                        </div>
                                    </li>
                                    <li className={s.item}
                                        style={flexValues.aboutMyself != null ? {flex: flexValues.aboutMyself} : {flex: flexValues.general}}>{arrayOfItems.aboutMyself}</li>
                                    <li className={s.item}
                                        style={flexValues.linkToLinkedIn != null ? {flex: flexValues.linkToLinkedIn} : {flex: flexValues.general}}>{arrayOfItems.linkToLinkedIn}</li>
                                    <li className={s.item}
                                        style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                                    <li className={s.item}
                                        style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                                    <li className={s.item}
                                        style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                                    <Link to={QUESTIONNAIRES_EDIT_ROUTE} state={{
                                        arrayOfSelectedItem: arrayOfItems,
                                        flexValues: flexValues,
                                        headerBlock: headerBlock
                                    }}>
                                        <li className={`${s.item}`}><img src={Edit} alt="Edit"/></li>
                                    </Link>
                                    <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                    <li className={`${s.item} ${s.deleteButton}`}><img src={Delete} alt="Delete"/></li>
                                </ul>
                            )
                        }
                    })()}
                </ul>
            </div>
        </div>
    );
};

export default QuestionnairesItem;