import person from "./Person.module.css";
import {NavLink} from "react-router-dom";

const Person = (props) => {

    const activeDialog = () => {
        return (
            p => p.isActive ? person.ActiveDialog : person.Dialog
        )
    }

    let path = "./" + props.id

    return (
        <div className={person.Person}>
            <NavLink className={activeDialog()} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Person