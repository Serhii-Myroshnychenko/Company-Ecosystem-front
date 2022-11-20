import s from './AdminSearch.module.css'


const AdminSearch = (props) => {

    return (
        <input className={s.blueSearch} {...props}/>
    );
};

export default AdminSearch;