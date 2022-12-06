import './App.css';
import Navbar from "./compontents/Navbar";
import Home from "./pages/Home";
import InputPurple from "./compontents/UI/input/InputPurple";
import LoginForm from "./compontents/LoginForm";
import Login from "./pages/Login";
import AppRouter from "./compontents/AppRouter";
import {useEffect, useState} from "react";
import EmployeesItem from "./compontents/AdminItems/EmployeesItem";
import AdminBlock from "./compontents/AdminBlock";
import EmployeesPage from "./pages/AdminPages/MainPages/EmployeesPage";
import {useLocation} from "react-router-dom";




function App() {

    const [isUserAuth, setIsUserAuthValue]  = useState(Boolean(localStorage.getItem('isAuth')) === true)
    const getIsUserAuth = (result) => setIsUserAuthValue(result)
    //const checkIsUserLogout = (value) => setIsUserAuthValue(value)



    return (
        <div className="App">
            {!isUserAuth
                ?
                <div>
                    <Navbar isAuth={isUserAuth}/>
                    <Login setIsUserAuth={getIsUserAuth}/>
                </div>
                :
                <div>
                    <Navbar isAuth={isUserAuth}/>
                    <AppRouter isAuth={isUserAuth}/>
                </div>
            }
        </div>
    );
}

export default App;
