const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_TEXT_DIALOG = 'CHANGE_TEXT_DIALOG'

const dialogsReducer = (state, action) => {

   switch (action.type) {
       case SEND_MESSAGE:
           if (state.newMessage) {

               let newMessage = {
                   id: state.messagesData.length + 1,
                   message: state.newMessage
               }

               state.messagesData.push(newMessage)
               state.newMessage = ''
           }
           return state
       case CHANGE_TEXT_DIALOG:
           state.newMessage = action.newText
           return state
       default:
           return state
   }
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export const dialogChangeActionCreator = (newText) => {
    return {type: CHANGE_TEXT_DIALOG, newText: newText}
}

export default dialogsReducer