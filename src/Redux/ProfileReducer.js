import {profileAPI} from "../API/API";

const ADD_POST = 'ADD_POST'
const CHANGE_TEXT_POST = 'CHANGE_TEXT_POST'
const SET_PROFILE = 'SET_PROFILE'


let initialState = {
    postsData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi, gays, how are you?'},
        {id: 3, message: 'I am fine!'}
    ],

    newPostText: '',

    profile: null
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
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
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

export const setProfileActionCreator = (profile) => {
    return {type: SET_PROFILE, profile: profile}
}

export const setProfileThunkCreator = (match) => {

    return (dispatch) => {
        let userId
        if (!match) {
            userId = 2
        } else {
            userId = match.params.userId
        }

        profileAPI.getProfile(userId).then(data => {
            dispatch(setProfileActionCreator(data))
        })
    }
}

export default profileReducer