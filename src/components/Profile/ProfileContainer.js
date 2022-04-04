import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfileThunkCreator} from "../../Redux/ProfileReducer";
import {useMatch} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setProfileThunkCreator(this.props.match)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let mapDispatchToProps = (dispatch) => {
    return {
        setProfileThunkCreator: (match) => {
            dispatch(setProfileThunkCreator(match))
        }
    }
}

export const withRouter = (Component) => {
    return (props) => {
        const match = useMatch('/profile/:userId/')
        return <Component {...props} match={match}/>
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)