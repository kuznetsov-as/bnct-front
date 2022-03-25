const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_TEXT_DIALOG = 'CHANGE_TEXT_DIALOG'

let initialState = {
    personsData: [
        {id: 1, name: 'Паша'},
        {id: 2, name: 'Вася'},
        {id: 3, name: 'Оля'},
        {id: 4, name: 'Дима'},
        {id: 5, name: 'Витя'},
        {id: 6, name: 'Коля'},
        {id: 7, name: 'Олег'}
    ],

    messagesData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'Привет!'}
    ],

    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {

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