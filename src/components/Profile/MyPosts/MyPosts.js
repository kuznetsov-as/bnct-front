import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, postChangeActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post key={p.id} message={p.message}/>)

    let newPostText = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        props.dispatch(postChangeActionCreator(newPostText.current.value))
    }

    return (
        <div className={myPosts.MyPosts}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostText} value={props.newPostText}/>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default MyPosts