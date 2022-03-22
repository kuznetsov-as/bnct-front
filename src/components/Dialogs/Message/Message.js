import message from "./Message.module.css";

const Message = (props) => {

    return (
        <div className={message.Message}>
            {props.text}
        </div>
    )
}

export default Message