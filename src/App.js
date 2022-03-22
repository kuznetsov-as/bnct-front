import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import "./Grid.css"
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
            <div className="Grid-wrapper">

                <Header/>

                <Navbar/>

                <div className="Grid-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile postData={props.postData}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs personsData={props.personsData} messagesData={props.messagesData}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
    );
}

export default App;
