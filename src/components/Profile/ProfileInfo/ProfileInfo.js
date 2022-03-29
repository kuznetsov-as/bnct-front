import profileInfo from './ProfileInfo.module.css';
import avatar from '../../../assets/Images/avatar.png'

const ProfileInfo = () => {
    return (
        <div className={profileInfo.ProfileInfo}>

            <div>
                <img src={avatar} alt="Avatar"/>
            </div>

            <div className={profileInfo.Description}>
                description
            </div>

        </div>
    )
}

export default ProfileInfo