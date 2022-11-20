import React from 'react';
import s from './AdminItem.module.css'
import {findAllByDisplayValue} from "@testing-library/react";
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import {Link} from "react-router-dom";

const EmployeesItem = ({arrayOfItems, flexValues}) => {

    const headers = ['id', 'email','password','role','position','item','locationId','place']

    return (
/*сдедаьб сюда хедер. Убрать ul li, и сделать руками в column каждый по отжельности*/
/*ещё если запариться то можно было бы с помощью 2 или 3 параметра map сравнивать с элементами header, и если они равны, то есть 0 и 0 например(индекс), то тогда объединяем их в колонну  */
/*типо если название headers-а например email, и название свойста в массиве объектов тоже равно headers, то тогда все эти свойста headers объеденяем в коллону*/
        <div className={s.adminItemContainer}>
            <div className={s.content}>
                <ul className={s.ul}>
                    <li className={s.item} style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                    <li className={s.item} style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                    <li className={s.item} style={flexValues.password != null ? {flex: flexValues.password} : {flex: flexValues.general}}>{arrayOfItems.password}</li>
                    <li className={s.item} style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}>{arrayOfItems.role}</li>
                    <li className={s.item} style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                    <li className={s.item} style={flexValues.item != null ? {flex: flexValues.item} : {flex: flexValues.general}}>{arrayOfItems.item}</li>
                    <li className={s.item} style={flexValues.locationId != null ? {flex: flexValues.locationId} : {flex: flexValues.general}}>{arrayOfItems.locationId}</li>
                    <li className={s.item} style={flexValues.place != null ? {flex: flexValues.place} : {flex: flexValues.general}}>{arrayOfItems.place}</li>
                    <Link to='/dfdsf'><li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li></Link>
                    <li className={s.item}><img src={Delete} alt="Delete"/></li>

                </ul>

            </div>
        </div>
    );
};

export default EmployeesItem;

// под каждую админ штуку будет свой EmployeesItem, и туда через пропсы
// будем записывать по типу props.name, props.title и тд
// а по поводу тайтлов(то что на синем фоне полоска), там можно
// чтоб не делать под каждую админ штуку свою AdminBlock,
// можно либо просто массив передавать прям там создавая на пейдже где фетч будем делать,
// и на основе этого массива мапить и отрисовывать в ряд.
// либо вообще сделать чтоб EmployeesItem включал в себя эту штуку тоже на синем фоне


            {/* <div className={s.adminItemContainer}>
                <div className={s.content}>
                    <ul className={s.ul}>
                        <li className={s.item}>{props.arrayOfItems.id}</li>
                        <li className={s.item}>{props.arrayOfItems.email}</li>
                        <li className={s.item}>{props.arrayOfItems.password}</li>
                        <li className={s.item}>{props.arrayOfItems.role}</li>
                        <li className={s.item}>{props.arrayOfItems.position}</li>
                        <li className={s.item}>{props.arrayOfItems.item}</li>
                        <li className={s.item}>{props.arrayOfItems.locationId}</li>
                        <li className={s.item}>{props.arrayOfItems.place}</li>
                    </ul>
                </div>
            </div>
        </div>


         <div className={s.adminItemContainer}>
             <div className={s.content}>
                 <ul className={s.ul}>
                     <li className={s.item}>{props.arrayOfItems.id}</li>
                     <li className={s.item}>{props.arrayOfItems.email}</li>
                     <li className={s.item}>{props.arrayOfItems.password}</li>
                     <li className={s.item}>{props.arrayOfItems.role}</li>
                     <li className={s.item}>{props.arrayOfItems.position}</li>
                     <li className={s.item}>{props.arrayOfItems.item}</li>
                     <li className={s.item}>{props.arrayOfItems.locationId}</li>
                     <li className={s.item}>{props.arrayOfItems.place}</li>
                 </ul>
             </div>
         </div>*/}