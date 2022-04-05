import profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Logo from "../common/Logo/Logo";
import React from "react";

const Profile = (props) => {

    if (!props.profile) {
        return (
            <Logo/>
        )
    } else {
        return (
            <div className={profile.Profile}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile