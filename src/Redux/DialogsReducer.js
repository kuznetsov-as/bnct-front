const SEND_MESSAGE = 'SEND_MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData,
                    {id: state.messagesData.length + 1, message: action.message}],
            }
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = (message) => {
    return {type: SEND_MESSAGE, message: message}
}

export default dialogsReducer