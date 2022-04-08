import {authAPI, profileAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PHOTO = 'SET_PHOTO'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                photo: action.photo
            }
        }

        default:
            return state
    }
}

export const setAuthUserDataActionCreator = (id, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {id, email, login, isAuth}}
}

export const setPhotoActionCreator = (photo) => {
    return {type: SET_PHOTO, photo: photo}
}

export const setProfileInHeaderThunkCreator = () => {
    return (dispatch) => {
        return  authAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserDataActionCreator(id, email, login, true))

                profileAPI.getProfile().then(data => {
                    dispatch(setPhotoActionCreator(data.photos.large))
                })
            }
        })
    }
}

export const loginThunkCreator = (login, password, rememberMe) => {

    return (dispatch) => {

        authAPI.login(login, password, rememberMe).then(data => {
            console.log(data)
            if (data.resultCode === 0) {
                dispatch(setProfileInHeaderThunkCreator())
            } else {
                let action = stopSubmit("login", {_error: data.messages})
                dispatch(action)
            }
        })
    }
}

export const logoutThunkCreator = () => {

    return (dispatch) => {

        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataActionCreator(null, null, null, false))
            }
        })
    }
}

export default authReducer