import dialogs from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let persons = props.personsData.map(p => <Person name={p.name} id={p.id}/>)

    let messages = props.messagesData.map(m => <Message text={m.message}/>)

    return (
        <div className={dialogs.Dialogs}>

            <div>
                {persons}
            </div>

            <div>
                {messages}
            </div>

        </div>
    )
}

export default Dialogs