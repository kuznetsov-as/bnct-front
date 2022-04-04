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

const App = () => {

    return (
        <div className="Grid-wrapper">

            <HeaderContainer/>

            <Navbar/>

            <div className="Grid-wrapper-content">
                <Routes>
                    <Route path="profile" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
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
}

export default App;
