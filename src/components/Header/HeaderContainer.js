import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setAuthUserDataActionCreator, setPhotoActionCreator} from "../../Redux/AuthReducer";
import {authAPI, profileAPI} from "../../API/API";

class HeaderContainer extends React.Component{

    componentDidMount() {


        authAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setProfile(id, email, login)

                profileAPI.getProfile().then(data => { //Передай в параметры this.props.id
                            this.props.setPhoto(data.photos.large)
                        })
            }
        })


        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data
        //             this.props.setProfile(id, email, login)
        //
        //             axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`) //this.props.id
        //                 .then(response => {
        //                     this.props.setPhoto(response.data.photos.large)
        //                 })
        //         }
        //     })
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
        setProfile: (id, email, login) => {
            dispatch(setAuthUserDataActionCreator(id, email, login))
        },

        setPhoto: (photo) => {
            dispatch(setPhotoActionCreator(photo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)