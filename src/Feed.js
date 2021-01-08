import React, {useState,useEffect} from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import Post from "./Post";
import {db} from "./Firebase";
import firebase from "firebase";

function Feed() {

    const[input,setInput]=useState("");

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data(),

            })))
        });
    },[]);

    const sendPost= (e) =>{
        e.preventDefault();

        db.collection("posts").add({
            name:"Vibhi Srivastava",
            description:"this is test",
            message: input,
            photoUrl:"",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");

    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e=> setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="blue"/>
                    <InputOption Icon={VideoLibraryIcon} title="Video" color="pink"/>
                    <InputOption Icon={EventIcon} title="Events" color="Grey"/>
                    <InputOption Icon={DescriptionIcon} title="Article" color="Orange"/>
                </div>
            </div>
            {/*Posts*/}
            {posts.map(({id,data:{name, description,message,photoUrl}})=>{
                return(
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />)
            })}
            
        </div>
    )
}

export default Feed;
