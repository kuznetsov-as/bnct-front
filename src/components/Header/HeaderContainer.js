import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setProfileInHeaderThunkCreator} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setProfileInHeaderThunkCreator()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    photo: state.auth.photo
})

let mapDispatchToProps = (dispatch) => {
    return {
        setProfileInHeaderThunkCreator: () => {
            dispatch(setProfileInHeaderThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)