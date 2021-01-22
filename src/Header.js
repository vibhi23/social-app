import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './Firebase';

function Header() {

    const dispatch=useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className="header">

            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3986/3986837.svg" alt="kssfs"/>

                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption Icon={ChatIcon} title="Messages"/>
                <HeaderOption avatar="" title="me" onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header;
