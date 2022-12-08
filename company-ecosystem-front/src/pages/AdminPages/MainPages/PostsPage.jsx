import React , {useState ,useEffect} from 'react';
import s from './styles/MainPages.module.css'
import AdminBlock from "../../../compontents/AdminBlock";
import {useTranslation} from "react-i18next";

const PostsPage = () => {

    const [posts, setPosts] = useState([{}]);
    const {t} = useTranslation();
    const itemName = "post"
    const headers = ['title', 'body','mark','create','locationId','id','actions']
    const flexValues = {
        id: '0 0 100px',
        email: '0 0 250px',
        general: '0 0 200px',
        photo: '0 0 350px',
    }
    const searchedFieldName = 'title'

    useEffect(() => {
        getPosts()
    },[]);

    async function getPosts(){
        let result = await fetch("https://localhost:7032/Post", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }); 
        if(result.status === 200){
            setPosts(await result.json())
        } else {
            alert(t("Alert.error"))
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={posts}
                            headersArray={headers} itemName={itemName}
                            searchedFieldName={searchedFieldName}/>
            </div>
        </div>
    );
};

export default PostsPage;