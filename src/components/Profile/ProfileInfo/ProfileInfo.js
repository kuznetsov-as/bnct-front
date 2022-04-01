import profileInfo from './ProfileInfo.module.css';
import avatar from '../../../assets/Images/avatar.png';


const ProfileInfo = (props) => {
        return (
            <div className={profileInfo.ProfileInfo}>

                <div>
                    <img  src={props.profile.photos.large === null? avatar : props.profile.photos.large} alt="Avatar"/>
                </div>

                <div className={profileInfo.Description}>
                    {props.profile.fullName}
                </div>

            </div>
        )
}

export default ProfileInfo