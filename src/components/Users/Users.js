import React from "react";
import users from './Users.module.css';
import axios from "axios";
import avatar from '../../assets/Images/avatar.png'


class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.setUsers(response.data.items)
            })
        }
    }

    setUsers = (users) => {
        this.props.setUsers(users)
    }

    follow = (id) => {
        this.props.follow(id)
    }


    unfollow = (id) => {
        this.props.unfollow(id)
    }

    render() {
        return (
            <div className={users.Users}>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatar} alt='Avatar'/>
                    </div>

                    <div>
                        {u.followed ?
                            <button className={users.Unfollowed} onClick={() => {
                                this.unfollow(u.id)
                            }}>Отписаться</button>
                            :
                            <button className={users.Followed} onClick={() => {
                                this.follow(u.id)
                            }}>Подписаться</button>}
                        </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users