import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.Post}>
            <img src='https://365psd.com/images/istock/previews/9353/93539553-flat-vector-avatar-face-character-person-portrait-user-icon.jpg' alt="Avatar"/>
            {props.message}
        </div>
    )
}

export default Post