import dialogs from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../common/FormsWrapper/FormsWrapper";

const Dialogs = (props) => {

    const onSubmit = (formData) => {
        props.sendMessage(formData.message)
    }


    let persons = props.dialogsPage.personsData.map(p => <Person key={p.id} name={p.name} id={p.id}/>)

    let messages = props.dialogsPage.messagesData.map(m => <Message key={m.id} text={m.message}/>)

    return (
        <div className={dialogs.Dialogs}>

            <div className={dialogs.GridPersons}>
                {persons}
            </div>

            <div className={dialogs.GridMessages}>
                {messages}
            </div>

            <DialogReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let maxLength = maxLengthCreator(15)

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={dialogs.GridSend}>
            <Field
                name={"message"}
                component={Textarea}
                placeholder={"Введи свое сообщение"}
                validate={[required, maxLength]}/>
            <button>Send</button>
        </form>
    )
}

const DialogReduxForm =  reduxForm({
    form: 'dialog'
})(DialogForm)


export default Dialogs