import './App.css';
import Logo from "./Logo/Logo";
import {Route, Routes} from "react-router-dom";
import SignIn from "./SingPage/SignIn";
import Login from "./SingPage/Login";
import Main from "./Main/Main";
import {useState} from "react";
import Accounts from "./Main/Accounts";
import Profile from "./Main/Profile";

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

const user = {
    inn: '1234567890',
    phone: '1234567890',
    name: 'NameName',
    email: 'nameName@gmail.com',
}

function App() {

    return (
        <div className="App">
            <Logo/>

            <Routes>
                <Route path={'/'}
                       element={<Main users={users} />}
                />
                <Route path={'/accounts'} element={<Accounts users={users} />}
                />
                <Route path={'/profile'} element={<Profile user={user} />}
                />
                <Route path='/sign-in' element={<SignIn/>}
                />
                <Route path='/login' element={<Login/>}
                />
            </Routes>
        </div>
    );
}

export default App;
