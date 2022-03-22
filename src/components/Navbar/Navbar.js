import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeLink = () => {
      return (
          link => link.isActive ? navbar.ActiveLink : navbar.Link
      )
    }

    return (
        <nav className={navbar.Navbar}>

            <div>

                <div>
                    <NavLink className={activeLink()} to="/profile">Профиль</NavLink>
                </div>

                <div>
                    <NavLink className={activeLink()} to="/dialogs">Диалоги</NavLink>
                </div>

                <div>
                    <NavLink className={activeLink()} to="/news">Новости</NavLink>
                </div>

                <div>
                    <NavLink className={activeLink()} to="/settings">Настройка</NavLink>
                </div>

            </div>

        </nav>
    )
}

export default Navbar