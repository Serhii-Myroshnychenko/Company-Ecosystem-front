import React, {useEffect, useRef, useState} from 'react';
import s from './styles/AdminBlock.module.css'
import AdminHeader from "./AdminHeaders/AdminHeader";
import AdminSearch from "./UI/search/AdminSearch";
import { itemSelector } from '../utils/selectors';
import ButtonPurple from "./UI/button/ButtonPurple";
import {Link, useLocation} from "react-router-dom";
import {EMPLOYERS_ROUTE} from "../utils/consts";
import {useTranslation} from "react-i18next";
import "../utils/i18next";



const AdminBlock = ({arrayOfItems, headersArray, flexValues,itemName, ...props}) => {

    const [widthBlockForCorrectScrollDrawing, setWidthBlockForCorrectScrollDrawing] = useState(0);
    const [isAdd, setIsAdd] = useState(false )
    const [searchQuery, setSearchQuery] = useState('');
    const [sortedArrayOfItems, setSortedArrayOfItems] = useState([...arrayOfItems]);
    const elementRef = useRef(null);
    const location = useLocation()
    const getElementsOfArray = arrayOfItems.map(el => el)
    const checkedItemNameToAddPageLink = itemSelector().filter(el => el.name === itemName)[0].addPagePath
    const checkIsEmployeePage = () => location.pathname === EMPLOYERS_ROUTE ? setIsAdd(true) : null
    const {t} = useTranslation();

    useEffect(() => {
        props.isAddPage ? setIsAdd(true) : setIsAdd(false)
        checkIsEmployeePage()
    }, [props.isAddPage])

    useEffect(() => {
        setWidthBlockForCorrectScrollDrawing(elementRef.current.scrollWidth);
    }, []);

    useEffect(() => {
        setSortedArrayOfItems(arrayOfItems)
    }, [arrayOfItems])

    useEffect(() => {
        searchSortedQuests();
    }, [searchQuery])


    const searchSortedQuests = () => {
        const fieldName = props.searchedFieldName
        if(searchQuery !== ''){
            setSortedArrayOfItems(arrayOfItems.filter(item => item[fieldName]?.includes(searchQuery)));
        } else if(searchQuery === ''){
            setSortedArrayOfItems(arrayOfItems)
        }
    }

    return (
        <div className={s.adminBlockContainer}>
            <div className={s.adminBlockContent}>
                <div className={s.topContainer}>
                    <div className={s.searchContainer}>
                        <AdminSearch onChange={e => setSearchQuery(e.target.value)}
                                     placeholder={t("AdminBlock.search")}
                                     value={searchQuery} />
                    </div>
                    {!isAdd ?
                        <div className={s.addButtonContainer}>
                            <Link to={checkedItemNameToAddPageLink} state={{
                                arrayOfItems: arrayOfItems,
                                flexValues: flexValues
                            }} onClick={() => setIsAdd(true)}>
                                <ButtonPurple style={{height: '42px'}} >{t("AdminBlock.addButtonContainer")}</ButtonPurple>
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

                        {sortedArrayOfItems.map(item => itemSelector(item,flexValues,widthBlockForCorrectScrollDrawing, props.updateTable,itemName).map(el => {
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



