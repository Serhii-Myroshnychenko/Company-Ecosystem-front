import {POSTS_EDIT_ROUTE, POSTS_ADD_ROUTE, POSTS_ROUTE} from '../../utils/consts';
import React, {useEffect, useState} from 'react';
import s from './AdminItem.module.css'
import Delete from "../../img/icons/Delete.svg"
import DeleteRequest from '../../requests/requests';
import Edit from "../../img/icons/Edit.svg"
import Save from "../../img/icons/Save.png"
import {Link, useLocation} from "react-router-dom";
import InputAdmin from "../UI/input/InputAdmin";
import {useTranslation} from "react-i18next";


const PostsItem = ({arrayOfItems , flexValues, headerBlock, updateTable,itemName}) => {

    const location = useLocation()
    const {t} = useTranslation();
    const [isEditItem, setIsEditItem] = useState(false)
    const [isAddItem, setIsAddItem] = useState(false)
    const [toggleArray, setToggleArray] = useState([])
    const [newArrayOfItems, setNewArrayOfItems] = useState({title: arrayOfItems.title, body: arrayOfItems.body, mark: arrayOfItems.mark, create: arrayOfItems.create, locationId: arrayOfItems.locationId, id:arrayOfItems.id});

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
        if (location.pathname === POSTS_EDIT_ROUTE) {
            setIsEditItem(true)
            setIsAddItem(false)
        } else if (location.pathname === POSTS_ADD_ROUTE) {
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
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('title')}>
                                    { !getIsToggleFromToggleArray('title') ? arrayOfItems.title
                                    : <InputAdmin value={newArrayOfItems.title} onChange={e => setNewArrayOfItems({...newArrayOfItems, title: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.body != null ? {flex: flexValues.body} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('body')}>
                                    { !getIsToggleFromToggleArray('body') ? arrayOfItems.body
                                    : <InputAdmin value={newArrayOfItems.body} onChange={e => setNewArrayOfItems({...newArrayOfItems, body: e.target.value})}/>
                                    }
                                </li>
                                <li className={s.item}
                                    style={flexValues.locationId != null ? {flex: flexValues.locationId} : {flex: flexValues.general}}
                                    onDoubleClick={() => changeArrayItems('locationId')}>
                                    { !getIsToggleFromToggleArray('locationId') ? arrayOfItems.locationId
                                    : <InputAdmin value={newArrayOfItems.locationId} onChange={e => setNewArrayOfItems({...newArrayOfItems, locationId: Number(e.target.value)})}/>
                                    }
                                </li>
                                <Link to={POSTS_ROUTE}
                                      state={{
                                          arrayOfSelectedItem: arrayOfItems,
                                          flexValues: flexValues,
                                          headerBlock: headerBlock
                                      }} onClick={() => updateTable(newArrayOfItems)}>
                                    <li className={`${s.item} ${s.editButton} ${s.saveButton}`}><img src={Save} alt="Edit"/></li>
                                </Link>
                                <li className={`${s.spaceBetweenLinkButtons}`}></li>
                                <Link to={POSTS_ROUTE}>
                                    <li className={`${s.item} ${s.deleteButton}`}><img src={Delete} alt="Delete"/></li>
                                </Link>
                            </ul>)

                    } else if (isAddItem) {
                        return (
                            <ul className={s.ul}>
                                <li className={s.item}
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}><InputAdmin value={newArrayOfItems.title || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, title: e.target.value})}/></li>
                                <li className={s.item}
                                    style={flexValues.body != null ? {flex: flexValues.body} : {flex: flexValues.general}}><InputAdmin value={newArrayOfItems.body || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, body: e.target.value})}/></li>
                                <li className={s.item}
                                    style={flexValues.locationId != null ? {flex: flexValues.locationId} : {flex: flexValues.general}}><InputAdmin  value={newArrayOfItems.locationId || ''} onChange={e => setNewArrayOfItems({...newArrayOfItems, locationId: Number(e.target.value)})}/></li>
                                <Link to={POSTS_ROUTE}  state={{
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
                                    style={flexValues.title != null ? {flex: flexValues.title} : {flex: flexValues.general}}>{arrayOfItems.title}</li>
                                <li className={s.item}
                                    style={flexValues.body != null ? {flex: flexValues.body} : {flex: flexValues.general}}>{arrayOfItems.body}</li>
                                <li className={s.item}
                                    style={flexValues.mark != null ? {flex: flexValues.mark} : {flex: flexValues.general}}>{arrayOfItems.mark}</li>
                                <li className={s.item}
                                    style={flexValues.create != null ? {flex: flexValues.create} : {flex: flexValues.general}}>{arrayOfItems.create}</li>
                                <li className={s.item}
                                    style={flexValues.locationId != null ? {flex: flexValues.locationId} : {flex: flexValues.general}}>{arrayOfItems.locationId}</li>
                                <li className={s.item}
                                    style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                                
                                <Link to={POSTS_EDIT_ROUTE} state={{
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

export default PostsItem;
