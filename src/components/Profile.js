import profile from './Profile.module.css';

const Profile = () => {
    return (
        <div className={profile.Profile}>
            <div>
                ava + description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile