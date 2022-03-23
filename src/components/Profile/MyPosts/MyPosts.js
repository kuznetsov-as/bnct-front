import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post key={p.id} message={p.message}/>)

    let newPostText = React.createRef()

    let addPost = () => {
        debugger
        if (newPostText.current.value) {
            props.addPost(newPostText.current.value)
        }
        newPostText.current.value = ''
    }

    return (
        <div className={myPosts.MyPosts}>
            <div>
                <div>
                    <textarea ref={newPostText}/>
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