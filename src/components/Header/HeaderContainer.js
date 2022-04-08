import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component{

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
        logoutThunkCreator: () => {
            dispatch(logoutThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)