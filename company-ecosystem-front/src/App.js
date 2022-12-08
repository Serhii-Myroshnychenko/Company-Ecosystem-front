import './App.css';
import Navbar from "./compontents/Navbar";
import Login from "./pages/Login";
import AppRouter from "./compontents/AppRouter";
import {useState} from "react";

function App() {

    const [isUserAuth, setIsUserAuthValue]  = useState(Boolean(localStorage.getItem('isAuth')) === true)
    const getIsUserAuth = (result) => setIsUserAuthValue(result)

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
