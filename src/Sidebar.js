import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {

    /*const recentItem = (topic) => {
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    };*/

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80" alt="jkjkj"/>
                <Avatar className="sidebar_avatar"/>
                <h2>Vibhi Srivastava</h2>
                <h4>vibhisrivastava@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on Post</p>
                    <p className="sidebar_statNumber">434</p> 
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                <div className="sidebar_recentItem">
                    <h4>#React.js</h4>
                </div>


            </div>
        </div>
    );
}

export default Sidebar;
