import logo from "../logo.svg";
import './../App.css';

const Header = () => {
    return (
        <header className="App-header Header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                BNCT
            </p>
        </header>
    )
}

export default Header