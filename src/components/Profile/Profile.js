import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={profile.Profile}>
            <ProfileInfo/>
            <MyPosts postsData = {props.state.postsData} newPostText = {props.state.newPostText} dispatch = {props.dispatch}/>
        </div>
    )
}

export default Profile