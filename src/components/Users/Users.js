import users from "./Users.module.css";
import avatar from "../../assets/Images/avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";

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
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollowThunkCreator(u.id)
                                    }}>Отписаться</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    className={users.Followed}
                                    onClick={() => {
                                        props.followThunkCreator(u.id)
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