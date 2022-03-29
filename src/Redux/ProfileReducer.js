const ADD_POST = 'ADD_POST'
const CHANGE_TEXT_POST = 'CHANGE_TEXT_POST'


let initialState = {
    postsData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi, gays, how are you?'},
        {id: 3, message: 'I am fine!'}
    ],

    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText) {
                return {
                    ...state,
                    postsData: [...state.postsData,
                        {id: state.postsData.length + 1, message: state.newPostText}],
                    newPostText: ''
                }
            } else {
                return state
            }
        }
        case CHANGE_TEXT_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const postChangeActionCreator = (newText) => {
    return {type: CHANGE_TEXT_POST, newText: newText}
}

export default profileReducer