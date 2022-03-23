import dialogs from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let persons = props.state.personsData.map(p => <Person key={p.id} name={p.name} id={p.id}/>)

    let messages = props.state.messagesData.map(m => <Message key={m.id} text={m.message}/>)

    let messageText = React.createRef()

    let sendMessage = () => {
        alert(messageText.current.value)
    }

    return (
        <div className={dialogs.Dialogs}>

            <div className={dialogs.GridPersons}>
                {persons}
            </div>

            <div className={dialogs.GridMessages}>
                {messages}
            </div>

            <div className={dialogs.GridSend}>
                <textarea ref={messageText}/>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs