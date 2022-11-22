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
    const [isUserAuth, setIsUserAuth] = useState("1");

    // Протестить, запишет ли в юз эффект из локал стореджа после логина, или нет
    // Если нет, то как-то колбеками наверное передать надо будет
    useEffect(() => {
        if(localStorage.getItem("IsAuth") === '1') {
            setIsUserAuth('1')
        }
    }, [])

    return (
        <div className="App">
            {isUserAuth === "0"
                ?
                <div>
                    <Navbar isAuth={isUserAuth}/>
                    <Login/>
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
