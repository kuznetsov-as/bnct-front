import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfileActionCreator} from "../../Redux/ProfileReducer";
import {useMatch} from "react-router";
import {profileAPI} from "../../API/API";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId

        if (!this.props.match) {
            userId = 2
        } else {
            userId = this.props.match.params.userId
        }

        profileAPI.getProfile(userId).then(data => {
            this.props.setProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setProfileActionCreator(profile))
        }
    }
}

export const withRouter = (Component) => {
    return (props) => {
        const match = useMatch('/profile/:userId/')
        return <Component {...props} match={match}/>
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)