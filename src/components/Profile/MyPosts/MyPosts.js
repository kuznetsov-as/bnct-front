import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post message={p.message}/>)

    return (
        <div className={myPosts.MyPosts}>
            <div>
                <div>
                    <textarea/>
                    <button>Add post</button>
                </div>
                <div>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default MyPosts