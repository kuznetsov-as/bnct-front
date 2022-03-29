import users from "./Users.module.css";
import avatar from "../../assets/Images/avatar.png";
import React from "react";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={users.Users}>

            <div>
                {pages.map(p => <span onClick={() => {
                    props.setPage(p)
                }} className={props.currentPage === p ? users.PageSelected : users.Page}>{p}</span>)}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatar} alt='Avatar'/>
                    </div>

                    <div>
                        {u.followed ?
                            <button className={users.Unfollowed} onClick={() => {
                                props.unfollow(u.id)
                            }}>Отписаться</button>
                            :
                            <button className={users.Followed} onClick={() => {
                                props.follow(u.id)
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