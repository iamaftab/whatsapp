import React, {useEffect, useState} from 'react';
import './sidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat( {addNewChat} ) {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>My Friend</h2>
                <p>Last Message...</p>
            </div>
        </div>
    );
}

export default SidebarChat;