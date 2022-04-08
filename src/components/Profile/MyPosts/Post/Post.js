import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.Post}>
            <img src={props.photo} alt="Avatar"/>
            {props.message}
        </div>
    )
}

export default Post