import React, {useEffect, useState} from 'react';
import "./chat.css";
import {Avatar, IconButton} from '@material-ui/core';
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>My Friend</h3>
                    <p>Last seen at 7:46 AM</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutLined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body" id="chatBody">
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                    <span className="chat_name">Aftab Jamil</span>Hi, Good Morning!
                    <span className="chat_timestamp">8:30 AM</span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit" >Send</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat;
