import profileReducer from "./UsersReducer";
import dialogsReducer from "./DialogsReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Hi, gays, how are you?'},
                {id: 3, message: 'I am fine!'}
            ],

            newPostText: ''
        },

        dialogsPage: {
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
    },

    subscribe(observer) {
        this._rerender = observer
    },

    getState() {
        return this._state
    },

    _rerender() {
        console.log('state is changed')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerender(this._state)
    }
}

export default store