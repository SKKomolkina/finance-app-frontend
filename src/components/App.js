import './App.css';
import Logo from "./Logo/Logo";
import {Route, Routes,} from "react-router-dom";
import SignIn from "./SingPage/SignIn";
import Login from "./SingPage/Login";
import Main from "./Main/Main";
import {useEffect, useState} from "react";
import Accounts from "./Main/Accounts";
import Profile from "./Main/Profile";
import api from "../api/api";

// const server = 'http://localhost:8080';

const users = [
    {
        type: 'Success',
        email: 'success@gmail.com',
        num: '$316.00',
    },
    {
        type: 'Success',
        email: 'success@gmail.com',
        num: '$316.00',
    },
    {
        type: 'Success',
        email: 'success@gmail.com',
        num: '$316.00',
    }
]

// const user = {
//     inn: '1234567890',
//     phone: '1234567890',
//     name: 'NameName',
//     email: 'nameName@gmail.com',
// }

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const id = 0;

    useEffect(() => {
        api.getUser(id)
            .then((response) => {
                setUser(response);
                console.log({user});
            })
            .catch((err) => console.log(err));
    })

    function registration(email, password, name, tin, phoneNumber) {
        api.signIn(email, password, name, tin, phoneNumber)
            .then(() => {
                // setTimeout(history.push, 3000, "/");
            })
    }

    return (
        <div className="App">
            <Logo/>

            <Routes>
                <Route path={'/'}
                       element={<Main users={users}/>}
                />
                <Route path={'/accounts'} element={<Accounts users={users}/>}
                />
                <Route path={'/profile'} element={<Profile user={user}/>}
                />
                <Route path='/sign-in' element={<SignIn registration={registration}/> }/>
                <Route path='/login' element={<Login/>}
                />
            </Routes>
        </div>
    );
}

export default App;
