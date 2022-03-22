import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";

 const MyPosts = () => {

    return (
            <div className={myPosts.MyPosts}>
                <div>
                    <div>
                        <textarea />
                        <button>Add post</button>
                    </div>
                    <div>
                        <Post message='Hello!'/>
                        <Post message='Hi, gays, how are you?'/>
                        <Post message='I am fine!'/>
                    </div>
                </div>
            </div>
        )
}

export default MyPosts