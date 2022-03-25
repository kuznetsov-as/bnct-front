const ADD_POST = 'ADD_POST'
const CHANGE_TEXT_POST = 'CHANGE_TEXT_POST'

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {

                let newPost = {
                    id: state.postsData.length + 1,
                    message: state.newPostText
                }

                state.postsData.push(newPost)
                state.newPostText = ''
            }
            return state
        case CHANGE_TEXT_POST:
            state.newPostText = action.newText
            return state
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