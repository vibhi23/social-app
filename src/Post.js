import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import "./Post.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name,description,message,photoUrl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_button">
                <InputOption Icon={FavoriteIcon} title="Like" Color="grey"/>
                <InputOption Icon={CommentIcon} title="Comment" Color="grey"/>
                <InputOption Icon={ShareIcon} title="Share" Color="grey"/>
                <InputOption Icon={SendIcon} title="Send" Color="grey"/>

            </div>
        </div>
    );
}

export default Post;
