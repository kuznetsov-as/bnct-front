const ADD_POST = 'ADD_POST'
const CHANGE_TEXT = 'CHANGE_TEXT'

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
            ]
        }
    },

    subscribe(observer) {
        this._rerender = observer
    },

    getState() {
        debugger
        return this._state
    },

    _rerender() {
        console.log('state is changed')
    },

    _addPost() {
        if (this._state.profilePage.newPostText) {

            let newPost = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText
            }

            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender(this._state)
        }
    },

    _changeText(newText) {
        this._state.profilePage.newPostText = newText
        this._rerender(this._state)
    },

    dispatch(action) {
      if (action.type === ADD_POST) {
          this._addPost()
      } else if (action.type === CHANGE_TEXT) {
          this._changeText(action.newText)
      }
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const postChangeActionCreator = (newText) => {
    return {type: CHANGE_TEXT, newText: newText}
}

export default store
window.store = store