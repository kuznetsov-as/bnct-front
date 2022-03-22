import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={profile.Profile}>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile