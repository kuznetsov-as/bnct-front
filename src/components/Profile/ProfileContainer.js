import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusThunkCreator, setProfileThunkCreator, updateStatusThunkCreator} from "../../Redux/ProfileReducer";
import {useMatch} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId
        if (!this.props.match) {
            userId = this.props.id
        } else {
            userId = this.props.match.params.userId
        }
        this.props.setProfileThunkCreator(userId)

        this.props.getStatusThunkCreator(userId)
    }

    componentDidUpdate(prevProps, prevState, s) {

        if(prevProps.match !== this.props.match) {
            let userId
            if (!this.props.match) {
                userId = this.props.id
            } else {
                userId = this.props.match.params.userId
            }

            this.props.setProfileThunkCreator(userId)

            this.props.getStatusThunkCreator(userId)
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusThunkCreator={this.props.updateStatusThunkCreator}/> // Показать Лехе, что будет если закомментить
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id
})

let mapDispatchToProps = (dispatch) => {
    return {
        setProfileThunkCreator: (match) => {
            dispatch(setProfileThunkCreator(match))
        },
        getStatusThunkCreator: (id) => {
            dispatch(getStatusThunkCreator(id))
        },
        updateStatusThunkCreator: (status) => {
            dispatch(updateStatusThunkCreator(status))
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