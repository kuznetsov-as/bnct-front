import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let posts = props.profilePage.postsData.map(p => <Post key={p.id} message={p.message}/>)

    let newPostText = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let updateNewPostText = () => {
        props.updateNewPostText(newPostText.current.value)
    }

    return (
        <div className={myPosts.MyPosts}>
            <div>
                <div>
                    <textarea onChange={updateNewPostText} ref={newPostText} value={props.profilePage.newPostText}/>
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