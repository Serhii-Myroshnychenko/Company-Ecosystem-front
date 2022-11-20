import React, {useEffect, useRef, useState} from 'react';
import s from './styles/AdminBlock.module.css'
import EmployeesItem from "./AdminItems/EmployeesItem";
import AdminHeader from "./AdminHeaders/AdminHeader";
import AdminSearch from "./UI/search/AdminSearch";


const AdminBlock = ({arrayOfItems, headersArray, flexValues}) => {

    useEffect(() => {
        setWidthBlockForCorrectScrollDrawing(elementRef.current.scrollWidth);
    }, []);

    const [widthBlockForCorrectScrollDrawing, setWidthBlockForCorrectScrollDrawing] = useState(0);
    const elementRef = useRef(null);
    const getElementsOfArray = arrayOfItems.map(el => el)


    return (
        <div className={s.adminBlockContainer}>
            <div className={s.adminBlockContent}>
                <div className={s.topContainer}>
                    <div className={s.searchContainer}>
                        <AdminSearch placeholder='Search...'/>
                    </div>
                </div>
                <div className={s.mainBlock}  ref={elementRef} >
                    <div>
                        <AdminHeader arrayOfItems={getElementsOfArray} headers={headersArray} flexValues={flexValues}  headerBlock={widthBlockForCorrectScrollDrawing}/>
                    </div>
                    <div className={s.informationContainer}>
                        {arrayOfItems.map(item => <EmployeesItem arrayOfItems={item} flexValues={flexValues} headerBlock={widthBlockForCorrectScrollDrawing}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBlock;



