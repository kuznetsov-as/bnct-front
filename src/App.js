import Navbar from "./components/Navbar/Navbar";
import "./Grid.css"
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import {addPostActionCreator} from "./Redux/ProfileReducer";
import {setProfileInHeaderThunkCreator} from "./Redux/AuthReducer";
import {initialAppThunkCreator} from "./Redux/AppReducer";
import Logo from "./components/common/Logo/Logo";



class App extends React.Component {

    componentDidMount() {
        this.props.initialAppThunkCreator()
    }

    render() {

        if (this.props.initialized) {

            return (
                <div className="Grid-wrapper">

                    <HeaderContainer/>

                    <Navbar/>

                    <div className="Grid-wrapper-content">
                        <Routes>
                            <Route path="profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>

                </div>
            )
        } else {
            return (
                <Logo/>
            )
        }
    }
}

let mapStateToProps = (state) => ({
        initialized: state.app.initialized
})

let mapDispatchToProps = (dispatch) => {
    return {
        initialAppThunkCreator: () => {
            dispatch(initialAppThunkCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
