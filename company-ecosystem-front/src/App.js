import './App.css';
import Navbar from "./compontents/Navbar";
import Home from "./pages/Home";
import InputPurple from "./compontents/UI/input/InputPurple";
import LoginForm from "./compontents/LoginForm";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
        <Navbar/>
        {/*<Home/>*/}
        {/*<LoginForm/>*/}
        <Login/>
    </div>
  );
}

export default App;
