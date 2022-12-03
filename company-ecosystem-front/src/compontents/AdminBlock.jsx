import React, {useEffect, useRef, useState} from 'react';
import s from './styles/AdminBlock.module.css'
import AdminHeader from "./AdminHeaders/AdminHeader";
import AdminSearch from "./UI/search/AdminSearch";
import { itemSelector } from '../utils/selectors';
import ButtonPurple from "./UI/button/ButtonPurple";
import {HOME_ROUTE, LOCATIONS_ADD_ROUTE, LOCATIONS_ROUTE} from "../utils/consts";
import {Link, useNavigate} from "react-router-dom";


const AdminBlock = ({arrayOfItems, headersArray, flexValues,itemName, ...props}) => {

    useEffect(() => {
        setWidthBlockForCorrectScrollDrawing(elementRef.current.scrollWidth);
    }, []);

    const [widthBlockForCorrectScrollDrawing, setWidthBlockForCorrectScrollDrawing] = useState(0);
    const elementRef = useRef(null);
    const getElementsOfArray = arrayOfItems.map(el => el)
    const [isAdd, setIsAdd] = useState(false )

    useEffect(() => {
        props.isAddPage ? setIsAdd(true) : setIsAdd(false)
    }, [props.isAddPage])

    const checkedItemNameToAddPageLink = itemSelector().filter(el => el.name === itemName)[0].addPagePath

    
    return (
        <div className={s.adminBlockContainer}>
            <div className={s.adminBlockContent}>
                <div className={s.topContainer}>
                    <div className={s.searchContainer}>
                        <AdminSearch placeholder='Search...'/>
                    </div>
                    {!isAdd ?
                        <div className={s.addButtonContainer}>
                            <Link to={checkedItemNameToAddPageLink} state={{
                                arrayOfItems: arrayOfItems,
                                flexValues: flexValues
                            }} onClick={() => setIsAdd(true)}>
                                <ButtonPurple style={{height: '42px'}} >Додати</ButtonPurple>
                            </Link>
                        </div>
                        : <div></div>
                    }
                </div>
                <div className={s.mainBlock}  ref={elementRef} >
                    <div>
                        <AdminHeader arrayOfItems={getElementsOfArray} headers={headersArray} flexValues={flexValues}  headerBlock={widthBlockForCorrectScrollDrawing}/>
                    </div>
                    <div className={s.informationContainer}>
                        {arrayOfItems.map(item => itemSelector(item,flexValues,widthBlockForCorrectScrollDrawing, props.updateTable).map(el => {
                            if(el.name === itemName){
                                return el.Component
                            }
                        }))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBlock;



