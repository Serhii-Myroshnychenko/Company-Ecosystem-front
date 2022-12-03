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




function App() {

    const [isUserAuth, setIsUserAuthValue]  = useState(false)
    // Протестить, запишет ли в юз эффект из локал стореджа после логина, или нет
    // Если нет, то как-то колбеками наверное передать надо будет
  /*  useEffect(() => {
        if(localStorage.getItem("IsAuth") === '1') {
            setIsUserAuth('1')
        }
    }, [])*/

    const getIsUserAuth = (isUserAuth) => setIsUserAuthValue(isUserAuth)


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
