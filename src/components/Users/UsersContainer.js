import {connect} from "react-redux";
import {
    followActionCreator,
    setPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../Redux/UsersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.setUsers(response.data.items)
                    this.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    setUsers = (users) => {
        this.props.setUsers(users)
    }

    setTotalUsersCount = (count) => {
        this.props.setTotalUsersCount(count)
    }

    follow = (id) => {
        this.props.follow(id)
    }


    unfollow = (id) => {
        this.props.unfollow(id)
    }

    setPage = (page) => {
        this.props.setPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            setPage={this.setPage}
            unfollow={this.unfollow}
            follow={this.follow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setPage: (page) => {
            dispatch(setPageActionCreator(page))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountActionCreator(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)