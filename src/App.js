import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import "./Grid.css"

const App = () => {

    return (
        <div className="Grid-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
