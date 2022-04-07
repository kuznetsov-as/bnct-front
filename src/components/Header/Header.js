import logo from "../../logo.svg";
import header from './Header.module.css';
import {Navigate, NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {

    const logoutClick = () => {
        props.logoutThunkCreator()
        return (<Navigate to={'/login'}/>)
    }

    return (
        <header className={header.Header}>
            <img src={logo} className={header.Logo} alt="logo"/>
            <div>
                <div className={header.NameBlock}>BNCT</div>
                <div className={header.LoginBlock}>
                    {props.isAuth ?
                        <div ><img onClick={logoutClick} src={props.photo} alt={'avatar'}/> {props.login}</div>
                        :
                        <NavLink to={'/login'}>
                            <div>
                                {/*<img src={logo} className={header.Logo} alt="logo"/>*/}
                                <div>Login</div>
                            </div>
                        </NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header