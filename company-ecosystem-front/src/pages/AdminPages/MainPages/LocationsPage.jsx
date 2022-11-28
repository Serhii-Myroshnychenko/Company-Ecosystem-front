import React , {useState ,useEffect} from 'react';
import s from './styles/MainPages.module.css'
import AdminBlock from "../../../compontents/AdminBlock";

const LocationsPage = () => {

    const [locations, setLocations] = useState([{}]);
/*    const [renderLocations, setRenderLocations] = useState(locations);*/
    const itemName = "location"

    useEffect(() => {
        getLocations()
    },[]);

    async function getLocations(){
        let result = await fetch("https://localhost:7032/Location", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        });
        if(result.status === 200){
            setLocations(await result.json())
        }
        else { 
            alert("Произошла ошибка")
        }
    }
    
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','actions']

    const flexValues = {
        id: '0 0 100px',
        email: '0 0 250px',
        general: '0 0 200px'
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={locations} headersArray={headers} itemName={itemName}/>
            </div>
        </div>
    );
};

export default LocationsPage;