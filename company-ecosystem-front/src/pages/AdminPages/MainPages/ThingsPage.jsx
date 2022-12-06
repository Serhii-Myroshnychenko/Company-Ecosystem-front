import React , {useState ,useEffect} from 'react';
import s from './styles/MainPages.module.css'
import AdminBlock from "../../../compontents/AdminBlock";

const ThingsPage = () => {

    const [things, setThings] = useState([{}]);
    const itemName = "thing"
    const headers = ['name', 'instruction','characteristic','photos','id','actions']
    const flexValues = {
        id: '0 0 100px',
        email: '0 0 250px',
        general: '0 0 200px',
        photo: '0 0 350px',
    }
    const searchedFieldName = 'name'

    useEffect(() => {
        getThings()
    },[]);

    async function getThings(){
        let result = await fetch("https://localhost:7032/Thing", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }); 
        if(result.status === 200){
            setThings(await result.json())
        } else {
            alert("Произошла ошибка")
        }
    }
    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={things}
                            headersArray={headers} itemName={itemName}
                            searchedFieldName={searchedFieldName}/>
            </div>
        </div>
    );
};

export default ThingsPage;