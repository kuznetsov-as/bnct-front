import logo from "../../../logo.svg";
import style from "./Logo.module.css"

const Logo = () => {
    return (
        <div>
            <img className={style.Logo} src={logo} alt={logo}/>
        </div>
    )
}

export default Logo