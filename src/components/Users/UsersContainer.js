import {connect} from "react-redux";
import {
    followActionCreator,
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageThunkCreator,
    unfollowActionCreator,
    unfollowThunkCreator
} from "../../Redux/UsersReducer";
import React from "react";
import Users from "./Users";
import Logo from "../common/Logo/Logo";
import {getUsersSelector} from "../../selectors/UsersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.users, this.props.currentPage, this.props.pageSize)
    }

    setPage = (page) => {
        this.props.setCurrentPageThunkCreator(page, this.props.pageSize)
    }

    follow = (id) => {
        this.props.follow(id)
    }


    unfollow = (id) => {
        this.props.unfollow(id)
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
                        followingInProgress={this.props.followingInProgress}
                        followThunkCreator={this.props.followThunkCreator}
                        unfollowThunkCreator={this.props.unfollowThunkCreator}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
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
        getUsersThunkCreator: (users, currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(users, currentPage, pageSize))
        },
        setCurrentPageThunkCreator: (currentPage, pageSize) => {
            dispatch(setCurrentPageThunkCreator(currentPage, pageSize))
        },
        followThunkCreator: (id) => {
            dispatch(followThunkCreator(id))
        },
        unfollowThunkCreator: (id) => {
            dispatch(unfollowThunkCreator(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)