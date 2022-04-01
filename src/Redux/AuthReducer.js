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
                isAuth: true
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

export const setAuthUserDataActionCreator = (id, email, login) => {
    return {type: SET_USER_DATA, data: {id, email, login}}
}

export const setPhotoActionCreator = (photo) => {
    return {type: SET_PHOTO, photo: photo}
}

export const setIsFetchingActionCreator = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}


export default authReducer