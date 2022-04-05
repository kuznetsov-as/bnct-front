import profileInfo from './ProfileInfo.module.css';
import avatar from '../../../assets/Images/avatar.png';
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    return (

        <div>

            <div className={profileInfo.ProfileInfo}>

                <div>
                    <img src={props.profile.photos.large === null ? avatar : props.profile.photos.large} alt="Avatar"/>
                </div>

                <div className={profileInfo.Description}>
                    {props.profile.fullName}
                </div>

            </div>

            <div>
                <ProfileStatus status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            </div>

        </div>
    )
}

export default ProfileInfo