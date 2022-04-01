import {connect} from "react-redux";
import {
    followActionCreator,
    setIsFetchingActionCreator, setIsFollowingProgressActionCreator,
    setPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../Redux/UsersReducer";
import React from "react";
import Users from "./Users";
import Logo from "../common/Logo/Logo";
import {usersAPI} from "../../API/API";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.setUsers(data.items)
                this.setTotalUsersCount(data.totalCount)
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

        this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.setUsers(data.items)
            })
    }


    render() {

        return (
            <>
                {this.props.isFetching ?
                    <Logo/>
                    :
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        setPage={this.setPage}
                        unfollow={this.unfollow}
                        follow={this.follow}
                        setIsFollowingProgress={this.props.setIsFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        },
        setIsFollowingProgress: (isFollowing) => {
            dispatch(setIsFollowingProgressActionCreator(isFollowing))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)