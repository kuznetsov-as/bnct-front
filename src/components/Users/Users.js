import users from "./Users.module.css";
import avatar from "../../assets/Images/avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/API";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={users.Users}>

            <div>
                {pages.map(p => <span key={p} onClick={() => {
                    props.setPage(p)
                }} className={props.currentPage === p ? users.PageSelected : users.Page}>{p}</span>)}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>

                    <NavLink to={'/profile/' + u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : avatar} alt='Avatar'/>
                        </div>
                    </NavLink>

                    <div>
                        {u.followed ?
                            <button className={users.Unfollowed}
                                    disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                props.setIsFollowingProgress(true, u.id)

                                usersAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    } else {
                                        alert(data)
                                    }
                                })

                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': '482c61a3-a92c-4711-81b3-fd539409dad6'
                                //     }
                                // }).then(response => {
                                //     if (response.data.resultCode === 0) {
                                //         props.unfollow(u.id)
                                //     } else {
                                //         let message = response.data.messages
                                //         alert({message})
                                //     }
                                //
                                //     props.setIsFollowingProgress(false, u.id)
                                // })
                            }}>Отписаться</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    className={users.Followed} onClick={() => {
                                props.setIsFollowingProgress(true, u.id)

                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    } else {
                                        alert(data)
                                    }
                                })

                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': '482c61a3-a92c-4711-81b3-fd539409dad6'
                                //     }
                                // }).then(response => {
                                //     if (response.data.resultCode === 0) {
                                //         props.follow(u.id)
                                //     } else {
                                //         let message = response.data
                                //         alert({message})
                                //     }
                                //
                                //     props.setIsFollowingProgress(false, u.id)
                                // })

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
    )
}

export default Users