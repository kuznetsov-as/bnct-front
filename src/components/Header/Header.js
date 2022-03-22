import logo from "../../logo.svg";
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.Header}>
            <img src={logo} className={header.Logo} alt="logo"/>
            <p>
                BNCT
            </p>
        </header>
    )
}

export default Header